import { DEC, INC, POST_TWEET } from "./AppActionType";

export function incrementAction() {
  return { type: INC };
}

export function decrmentAction() {
  return { type: DEC };
}

export function postTweetAction(payload) {
  return { type: POST_TWEET, payload: payload };
}
