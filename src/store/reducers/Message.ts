import { Record } from "immutable";
import {
  MessageActions,
  MessageActionTypes,
} from "../actions/types/messageActionTypes";

// TODO: turn into a message reducer
// ? attach status of message (ex: success, error, info)

const MessageState = Record({
  message: "",
  tag: "",
  show: false,
});

export const initialMessageState = MessageState({});

export default (state = initialMessageState, action: MessageActionTypes) => {
  switch (action.type) {
    case MessageActions.SET_MESSAGE:
      return state
        .set("message", action.payload.msg)
        .set("tag", action.payload.tag);

    case MessageActions.SHOW_MESSAGE:
      return state.set("show", true);

    case MessageActions.REMOVE_MESSAGE:
      return state.set("message", "").set("tag", "");

    case MessageActions.HIDE_MESSAGE:
      return state.set("show", false);

    default:
      return state;
  }
};
