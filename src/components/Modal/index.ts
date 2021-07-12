import React from "react";
//https://nainacodes.com/blog/create-an-accessible-and-reusable-react-modal

//https://enetoolveda.medium.com/create-a-modal-with-react-typescript-and-portals-62095dc7541b

import * as ReactDOM from "react-dom";
export type ModalProps = {
  children: React.ReactChildren;
};

export type ModalState = any;

export class Modal extends React.Component {
  private container: HTMLDivElement;
  private modalRoot: HTMLElement;

  public constructor(props: ModalProps) {
    super(props);
    this.modalRoot =
      document.getElementById("root-modal") || document.createElement("div");
    this.modalRoot.className = "root-modal";
    this.container = document.createElement("div");
  }

  public componentDidMount(): void {
    this.modalRoot.appendChild(this.container);
  }

  public componentWillUnmount(): void {
    this.modalRoot.removeChild(this.container);
  }

  public render(): React.ReactElement<ModalProps> {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}
