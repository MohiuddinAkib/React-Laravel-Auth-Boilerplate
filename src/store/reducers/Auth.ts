import { Record } from "immutable";
import {
  AuthActionTypes,
  AuthActions,
} from "./../actions/types/authActionTypes";

const AuthState = Record({
  user: {},
  authenticated: false,
  loading: false,
});

export const initialAuthState = AuthState({});

export default (state = initialAuthState, action: AuthActionTypes) => {
  switch (action.type) {
    case AuthActions.FETCH_USER_DATA:
      return state.set("user", action.payload).set("authenticated", true);

    case AuthActions.LOADING_AUTH_DATA:
      return state.set("loading", true);

    case AuthActions.LOADED_AUTH_DATA:
      return state.set("loading", false);
    default:
      return state;
  }
};
