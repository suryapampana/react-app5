import { POST_TWEET } from "../actions/AppActionType";

const initState = {
  list: [],
};

export function TweetReducer(state = initState, action) {
  switch (action.type) {
    case POST_TWEET:
      const newList = [action.payload, ...state.list];
      return { ...state, list: newList };
    default:
      return state;
  }
}
