//https://codesandbox.io/s/redux-saga-typescript-example-rz8bg?file=/src/web/search/SearchContainer.ts:396-408

import { put, call, takeEvery, all } from "redux-saga/effects";
import { INCREMENT, DECREMENT, RESET, INCREMENT_ASYNC } from "./counters-types";
import Delay from "./counters.helpers";

export function* additionCounter() {
  try {
    yield put({ type: INCREMENT });
    yield Delay(5000);
    yield put({ type: DECREMENT });
    yield Delay(5000);
    yield put({ type: RESET });
    yield Delay(5000);
  } catch (err) {
    console.log(err);
  }
}
export function* onIncrementCounter() {
  yield takeEvery(INCREMENT_ASYNC, additionCounter);
}

export function* countersSaga() {
  yield all([onIncrementCounter()]);
}

