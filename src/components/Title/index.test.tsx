import React from "react";
import { findByAtt } from "../../_Utils/testCommfun";
import { shallow } from "enzyme";
import { Title } from ".";

const setUp = () => {
  const wrpapperComp = shallow(<Title />);
  return wrpapperComp;
};

describe("Should render Title component", () => {
  let component: any;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render Title component", () => {
    const wrapperComponet = findByAtt(component, "OptushomeTest");
    expect(wrapperComponet.length).toBe(1);
  });
  it("Should render Title component selectTecht", () => {
    const wrapperComponet = findByAtt(component, "selectTecht");
    expect(wrapperComponet.length).toBe(1);
  });
});
