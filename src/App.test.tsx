import React from "react";
import { findByAtt, testStore } from "./_Utils/testCommfun";
import { shallow } from "enzyme";
import App from "./App";

const setUp = () => {
  //const store = testStore(initialState);
  //const wrapper = shallow(<App store={store} />).childAt(0).dive();
  //return wrapper;
  const wrapper = shallow(<App />);
  return wrapper;
};

describe("Should render App Component", () => {
  let component: any;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render without errors", () => {
    const Component = findByAtt(component, "CounterTypescript");
    expect(Component.length).toBe(0);
  });
});
