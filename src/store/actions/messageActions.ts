import {
  MessageTags,
  MessageActions,
  MessageActionTypes,
} from "./types/messageActionTypes";

export const setErrorMsg = (msg: string): MessageActionTypes => ({
  type: MessageActions.SET_MESSAGE,
  payload: {
    msg,
    tag: MessageTags.ERROR,
  },
});

export const setSuccessMsg = (msg: string): MessageActionTypes => ({
  type: MessageActions.SET_MESSAGE,
  payload: {
    msg,
    tag: MessageTags.SUCCESS,
  },
});

export const setInfoMsg = (msg: string): MessageActionTypes => ({
  type: MessageActions.SET_MESSAGE,
  payload: {
    msg,
    tag: MessageTags.INFO,
  },
});

export const showMsg = (): MessageActionTypes => ({
  type: MessageActions.SHOW_MESSAGE,
});

export const removeMsg = (): MessageActionTypes => ({
  type: MessageActions.REMOVE_MESSAGE,
});

export const hideMsg = (): MessageActionTypes => ({
  type: MessageActions.HIDE_MESSAGE,
});
