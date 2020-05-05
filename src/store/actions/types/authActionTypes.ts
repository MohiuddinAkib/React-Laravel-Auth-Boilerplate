import { Action } from "redux";

export enum AuthActions {
  FETCH_USER_DATA = "FETCH_USER_DATA",
  LOADING_AUTH_DATA = "LOADING_AUTH_DATA",
  LOADED_AUTH_DATA = "LOADED_AUTH_DATA",
}

interface FetchUserAction extends Action<AuthActions.FETCH_USER_DATA> {
  payload: { name: string; id: number; email: string; created_at: string };
}

interface LoadingAuthData extends Action<AuthActions.LOADING_AUTH_DATA> {}

interface LoadedAuthData extends Action<AuthActions.LOADED_AUTH_DATA> {}

export type AuthActionTypes =
  | FetchUserAction
  | LoadingAuthData
  | LoadedAuthData;
