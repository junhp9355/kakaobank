import React from "react";
import { ReactComponent as Logotop } from "../components/images/logo_black.svg";
import "../styles/TopLogo.css";
import TopSubMenu from "./TopSubMenu";

const TopLogo = () => {
  return (
    <header className="header">
      <div className="TopLogo">
        <nav className="con">
          <a href="#!">
            <Logotop className="Logo" />
          </a>
        </nav>
        <TopSubMenu />
      </div>
    </header>
  );
};

export default TopLogo;
