import React from "react";
import Header from "./index";
import { findByAtt } from "../../_Utils/testCommfun";
import { shallow } from "enzyme";

const setupComp = () => {
  const wrapperComp = shallow(<Header />);
  return wrapperComp;
};

describe("Should Render hyperlink", () => {
  let component: any;
  let mockFun: any;
  beforeEach(() => {
    mockFun = jest.fn();
    component = setupComp();
  });

  it('Should render a hyperlink', () =>{
    const hyperLink = findByAtt(component, "link");
    expect(hyperLink.length).toBe(1);
  })
});
