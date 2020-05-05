import "./index.css";
import "typeface-roboto";
import "reflect-metadata";

import App from "./App";
import React from "react";
import store from "./store";
import ReactDOM from "react-dom";
import echo from "./config/echo";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import AuthService from "./services/AuthService";
// import Provider from "./context/WeatherContext";
import container from "./services/serviceContainer";
import {
  setUserData,
  loadedAuthData,
  loadingAuthData,
} from "./store/actions/authActions";

const authService = container.get<AuthService>("AuthService");
echo.setAuthToken(authService.getToken());

const renderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (authService.setAuthorizationHeader()) {
  authService
    .fetchUserData()
    .then((user) => {
      store.dispatch(loadingAuthData());
      store.dispatch(setUserData(user));
      store.dispatch(loadedAuthData());

      renderDOM();
    })
    .catch(() => {
      renderDOM();
    });
} else {
  renderDOM();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
