import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import createMiddlewareSaga from 'redux-saga';
import { rootSaga } from "./rootSagas";


const middleWareSagas = createMiddlewareSaga();
const middleWares = [logger, thunk, middleWareSagas];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
middleWareSagas.run(rootSaga);
export default store;