import React from "react";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../redux/rootReducer";
import { middleWares } from "../redux/rootStore";

export const findByAtt = (component: any, attr: string) => {
  const wrapper = component.find(`[data-testid='${attr}']`);
  return wrapper;
};

export const testStore = (initialState: object) => {
  const createStoreWithMiddleware = applyMiddleware(...middleWares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
