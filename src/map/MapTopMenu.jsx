import React from "react";
import { ReactComponent as Logotop } from "../components/images/logo_black.svg";
import "../styles/NoticeTopMenu.css";
import { Link } from "react-router-dom";
// import "../styles/NoticeTopSubMenu.css";
import SecondMenu01 from "../components/SecondMenu01";
import SecondMenu02 from "../components/SecondMenu02";
import SecondMenu03 from "../components/SecondMenu03";
import SecondMenu04 from "../components/SecondMenu04";

const MapTopMenue = () => {
  return (
    <header className="header">
      <div className="NoticeTopLogo">
        <nav className="con">
          <Link to="/">
            <a href="#!">
              <Logotop className="NoticeLogo" />
            </a>
          </Link>
        </nav>
        <section className="NoticeTopSubMenu">
          <ul className="Noticemenu-1">
            <li>
              <a href="#!" className="Noticefirst-menu">
                은행소개
                <div className="what" />
              </a>
              <li className="NoticeSecondMenuComp">
                <SecondMenu01 />
              </li>
            </li>
            <li>
              <a href="#!" className="Noticefirst-menu">
                IR투자정보
                <div className="what2" />
              </a>
              <li className="NoticeSecondMenuComp">
                <SecondMenu02 />
              </li>
            </li>
            <li>
              <a href="#!" className="Noticefirst-menu">
                상품안내
              </a>
              <li className="NoticeSecondMenuComp">
                <SecondMenu03 />
              </li>
            </li>
            <li>
              <a href="#!" className="Noticefirst-menu">
                고객센터
              </a>
              <li className="NoticeSecondMenuComp">
                <SecondMenu04 />
              </li>
            </li>
            <li>
              <a href="#!" className="Noticefirst-menu">
                이벤트
              </a>
            </li>
            <li className="Noticemenu-1-1">
              <a href="#!" className="Noticefirst-menu-1">
                서류제출하기
              </a>
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
};

export default MapTopMenue;
