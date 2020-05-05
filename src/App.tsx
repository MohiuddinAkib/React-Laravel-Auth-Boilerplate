import React from "react";
// import style from "./App.module.css";
import { RootState } from "./store";
import { useSelector } from "react-redux";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import About from "./Containers/About/About";
import Register from "./Containers/Register/Register";
import Preloader from "./components/Preloader/Preloader";
import GuestRoute from "./components/GuestRoute/GuestRoute";
import VerifyEmail from "./Containers/VerifyEmail/VerifyEmail";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PasswordReset from "./Containers/PasswordReset/PasswordReset";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ForgotPassword from "./Containers/ForgotPassword/ForgotPassword";
// import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

function App() {
  const authState = useSelector<RootState, RootState[keyof RootState]>(
    (state) => state.auth
  );

  const loading = authState.get("loading", false);

  if (loading) {
    return <Preloader open={loading} />;
  }

  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/" exact component={Home} />
        <GuestRoute path="/login" exact component={Login} />
        <ProtectedRoute path="/about" exact component={About} />
        <GuestRoute path="/register" exact component={Register} />
        <GuestRoute
          path="/password/reset/:token"
          exact
          component={PasswordReset}
        />
        <GuestRoute path="/forgot-password" exact component={ForgotPassword} />
        <ProtectedRoute
          path="/email/verify/:id/:hash"
          exact
          component={VerifyEmail}
        />
      </Switch>
    </Router>
  );
}

export default App;
