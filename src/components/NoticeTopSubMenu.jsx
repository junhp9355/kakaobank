import React from "react";
import "../styles/NoticeTopSubMenu.css";
import SecondMenu01 from "./SecondMenu01";
import SecondMenu02 from "./SecondMenu02";
import SecondMenu03 from "./SecondMenu03";
import SecondMenu04 from "./SecondMenu04";

const NoticeTopSubMenu = () => {
  return (
    <section className="NoticeTopSubMenu">
      <ul className="Noticemenu-1">
        <li>
          <a href="#!" className="Noticefirst-menu active">
            은행소개
          </a>
          <li className="NoticeSecondMenuComp">
            <SecondMenu01 />
          </li>
        </li>
        <li>
          <a href="#!" className="Noticefirst-menu">
            IR투자정보
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
  );
};

export default NoticeTopSubMenu;
