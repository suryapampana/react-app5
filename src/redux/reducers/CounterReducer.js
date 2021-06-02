import { DEC, INC } from "../actions/AppActionType";

const initState = {
  counter: 10,
};

export function CounterReducer(state = initState, action) {
  switch (action.type) {
    case INC:
      return { ...state, counter: state.counter + 1 };

    case DEC:
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
}
