import React from "react";
import { ReactComponent as Logotop } from "../components/images/logo_black.svg";
import "../styles/TopLogo.css";
import TopSubMenu from "./TopSubMenu";
import { Link } from "react-router-dom";

const TopLogo = () => {
  return (
    <header className="header">
      <div className="TopLogo">
        <nav className="con">
          <Link to="/">
            <a href="#!">
              <Logotop className="Logo" />
            </a>
          </Link>
        </nav>
        <TopSubMenu />
      </div>
    </header>
  );
};

export default TopLogo;
