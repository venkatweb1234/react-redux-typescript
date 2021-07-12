import React, { Fragment } from "react";
import "./style.scss";
import {
  StyledHyperLink,
  StyledHeader2,
  StyledHeader3,
  StyledHeader6,
  StyledModalContent,
  StyledModalHeader,
  StyledBtnClose,
  StyledModal,
  StyledModalBody,
  StyledModalFooter,
  StyledParagraph,
} from "../../_Style/allStylescomp";
import { Modal } from "../Modal";
import MContent from "../Modal/modalContent";

export interface AppState {
  show: boolean;
}
export class Title extends React.Component<any, AppState> {
  public state: AppState;
  public constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };

    this.onClickModalhandler = this.onClickModalhandler.bind(this);
  }

  public onClickModalhandler(evt: React.MouseEvent) {
    evt.preventDefault();
    this.setState((prev) => ({
      show: !prev.show,
    }));
  }

  public render() {
    const { show } = this.state;
    console.log(show);
    return (
      <Fragment>
        <StyledHeader2 data-testid="OptushomeTest">
          Optus Home Internet Products
        </StyledHeader2>
        <StyledHeader6  data-testid="selectTecht">
          1. Select Technology Type
        </StyledHeader6>
        <StyledHyperLink href="#" onClick={this.onClickModalhandler}>
          Compare all Optus Home Internet products
        </StyledHyperLink>
        {show && (
          <Modal>
            <StyledModal>
              <StyledModalContent>
                <StyledModalHeader>
                  <StyledBtnClose
                    role="button"
                    onClick={this.onClickModalhandler}
                  >
                    &times;
                  </StyledBtnClose>
                  <StyledHeader6>Compare Optus Home Internet Products</StyledHeader6>
                </StyledModalHeader>
                <StyledModalBody>
                   <MContent></MContent>
                </StyledModalBody>
                <StyledModalFooter>
                  <StyledHeader3 color='primary'>Compare Optus Home Internet Products</StyledHeader3>
                </StyledModalFooter>
              </StyledModalContent>
            </StyledModal>
          </Modal>
        )}
      </Fragment>
    );
  }
}
