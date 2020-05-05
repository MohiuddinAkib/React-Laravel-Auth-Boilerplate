import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { initialAuthState } from "./reducers/Auth";
import { initialMessageState } from "./reducers/Message";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

export type RootState = {
  auth: typeof initialAuthState;
  error: typeof initialMessageState;
};

const composeEnhancers: Function =
  process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
