//https://codesandbox.io/s/redux-saga-typescript-example-rz8bg?file=/src/web/search/SearchContainer.ts:396-408
import * as actions from "./counters-types";

export const IncrementFun = () => ({
  type: actions.INCREMENT,
});

export const DecrementFun = () => ({
  type: actions.DECREMENT,
});

export const ResetFun = () => ({
  type: actions.RESET,
});
