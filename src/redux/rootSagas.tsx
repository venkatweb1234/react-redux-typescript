import { all, call } from "redux-saga/effects";
import { countersSaga } from "./counter/counters.saga";
// import productsSagas from "./Products/products.sagas";
// import ordersSagas from "./Orders/orders.sagas";

export  function* rootSaga() {
  yield all([call(countersSaga)]);
}