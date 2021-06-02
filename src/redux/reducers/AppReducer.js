import { INC, DEC, POST_TWEET } from "../actions/AppActionType";

const initState = {
  message: "Hello Redux",
  counter: 10,
  list: [],
};

/**
 * Reducer is function
 * Reduce is a special function
 * It takes Two Param, STATE, ACTION,
 *
 * ACTION => {type:'', payload : }
 *
 * State is the Initial State.
 */
export function AppReducer(state = initState, action) {
  switch (action.type) {
    case INC:
      // updated state
      return { ...state, counter: state.counter + 1 };

    case DEC:
      return { ...state, counter: state.counter - 1 };

    case POST_TWEET:
      const newList = [action.payload, ...state.list];
      return { ...state, list: newList };

    default:
      return state;
  }
}
