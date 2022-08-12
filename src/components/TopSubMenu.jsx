import React from "react";
import "../styles/TopSubMenu.css";
import SecondMenu01 from "./SecondMenu01";
import SecondMenu02 from "./SecondMenu02";
import SecondMenu03 from "./SecondMenu03";
import SecondMenu04 from "./SecondMenu04";

const TopSubMenu = () => {
  return (
    <section className="TopSubMenu">
      <ul className="menu-1">
        <li>
          <a href="#!" className="first-menu">
            은행소개
          </a>
          <li className="SecondMenuComp">
            <SecondMenu01 />
          </li>
        </li>
        <li>
          <a href="#!" className="first-menu">
            IR투자정보
          </a>
          <li className="SecondMenuComp">
            <SecondMenu02 />
          </li>
        </li>
        <li>
          <a href="#!" className="first-menu">
            상품안내
          </a>
          <li className="SecondMenuComp">
            <SecondMenu03 />
          </li>
        </li>
        <li>
          <a href="#!" className="first-menu">
            고객센터
          </a>
          <li className="SecondMenuComp">
            <SecondMenu04 />
          </li>
        </li>
        <li>
          <a href="#!" className="first-menu">
            이벤트
          </a>
        </li>
        <li className="menu-1-1">
          <a href="#!" className="first-menu-1">
            서류제출하기
          </a>
        </li>
      </ul>
    </section>
  );
};

export default TopSubMenu;
