import { INCREMENT, DECREMENT, RESET } from "./counters-types";
import countReducer from "./counters-reducers";

describe("Counter Reducers", () => {
  it("Should return default state", () => {
    const newState = countReducer(undefined, {});
    expect(newState).toEqual({ count: 0 });
  });

  it("Should return new State if reciving INCREMENT", () => {
    const newState = countReducer(undefined, {
      type: INCREMENT,
    });
    expect(newState).toEqual({ count: 1 });
  });
  it("Should return new State if reciving DECREMENT", () => {
    const newState = countReducer(undefined, {
      type: DECREMENT,
    });
    expect(newState).toEqual({ count: -1 });
  });
  it("Should return new State if reciving RESET", () => {
    const newState = countReducer(undefined, {
      type: RESET,
    });
    expect(newState).toEqual({ count: 0 });
  });
});
