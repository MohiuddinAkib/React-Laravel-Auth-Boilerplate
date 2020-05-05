import React from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Route, useLocation, Redirect, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  component: React.JSXElementConstructor<RouteProps>;
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const authState = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        authState.get("authenticated") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
