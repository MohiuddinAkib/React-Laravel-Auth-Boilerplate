import { Action } from "redux";
export enum MessageActions {
  SET_MESSAGE = "SET_MESSAGE",
  SHOW_MESSAGE = "SHOW_MESSAGE",
  REMOVE_MESSAGE = "REMOVE_MESSAGE",
  HIDE_MESSAGE = "HIDE_MESSAGE",
}

export enum MessageTags {
  INFO = "INFO",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

interface SetMsgAction extends Action<MessageActions.SET_MESSAGE> {
  payload: { msg: string; tag: string };
}

interface ShowMsgAction extends Action<MessageActions.SHOW_MESSAGE> {}

interface RemoveMsgAction extends Action<MessageActions.REMOVE_MESSAGE> {}

interface HideMsgAction extends Action<MessageActions.HIDE_MESSAGE> {}

export type MessageActionTypes =
  | SetMsgAction
  | ShowMsgAction
  | RemoveMsgAction
  | HideMsgAction;
