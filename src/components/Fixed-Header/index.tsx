import React from "react";
import { Title } from "../Title";
import OptusLogo from "./../../assets/Optus-logo-desktop.png";

import "./style.scss";

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="header">
      <header className="wrap">
        <div className="logo">
          <a href="https://optus.com.au" target="_blank" data-testid="link">
            <img src={OptusLogo} alt="OptusLogo" className="logoimg" />
          </a>
        </div>
      </header>
      
    </div>
  );
};

export default Header;
