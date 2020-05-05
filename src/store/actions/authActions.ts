import { Action } from "redux";
import { RootState } from "./../index";
import { ThunkAction } from "redux-thunk";
import AuthService from "../../services/AuthService";
import container from "../../services/serviceContainer";
import { AuthActions, AuthActionTypes } from "./types/authActionTypes";

const authService = container.get<AuthService>("AuthService");

export const fetchUser = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<AuthActions>
> => async (dispatch, getState) => {
  try {
    dispatch(loadingAuthData());
    const me = await authService.fetchUserData();
    dispatch(setUserData(me));
  } catch (error) {}
  dispatch(loadedAuthData());
};

export const loadingAuthData = (): AuthActionTypes => ({
  type: AuthActions.LOADING_AUTH_DATA,
});

export const loadedAuthData = (): AuthActionTypes => ({
  type: AuthActions.LOADED_AUTH_DATA,
});

export const setUserData = (userData: any): AuthActionTypes => ({
  type: AuthActions.FETCH_USER_DATA,
  payload: userData,
});
