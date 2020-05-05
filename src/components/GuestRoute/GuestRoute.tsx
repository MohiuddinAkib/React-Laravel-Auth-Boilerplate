import React from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Route, useLocation, Redirect, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  component: React.JSXElementConstructor<RouteProps>;
}

const GuestRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const authState = useSelector((state: RootState) => state.auth);

  let { from } = (location.state as any) || { from: { pathname: "/" } };

  return (
    <Route
      {...rest}
      render={(props) =>
        !authState.get("authenticated") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: from.pathname,
            }}
          />
        )
      }
    />
  );
};

export default GuestRoute;
