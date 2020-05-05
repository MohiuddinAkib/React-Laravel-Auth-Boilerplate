import authReducer from "./Auth";
import messageReducer from "./Message";

import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  message: messageReducer,
});
