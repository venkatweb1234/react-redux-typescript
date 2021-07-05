//https://codesandbox.io/s/redux-saga-typescript-example-rz8bg?file=/src/web/search/SearchContainer.ts:396-408
import * as actions from "./counters-types";

const INITIAL_STATE = {
  count: 0,
};
const countReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case actions.RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default countReducer;
