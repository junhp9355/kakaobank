import React from "react";
import "../styles/Page07.css";
import Scroll_pg07 from "./Scroll_pg07";
import Scroll_pg07bg from "./Scroll_pg07bg";
import Scroll_pg07sun from "./Scroll_pg07sun";
import Scroll_pg07star from "./Scroll_pg07star";

const Page07 = () => {
  const animatedItem = {
    1: Scroll_pg07bg("up", 1.2, 0),
    2: Scroll_pg07("diagonal", 1, 1),
    3: Scroll_pg07sun(1, 1.2),
    4: Scroll_pg07star("fadeIn", 1, 1.2),
  };
  return (
    <section className="Page07">
      <section className="Page07background">
        <section className="StarMain">
          <div className="Star01" />
          <div className="Star02" />
          <div className="Star03" />
          <div className="Star04" />
          <div className="Star05" />
          <div className="Star06" />
          <div className="Star07" />
          <div className="Star08" />
          <div className="Star09" />
          <div className="Star10" />
          <div className="Star11" />
        </section>
      </section>
      <section {...animatedItem[1]} className="Page07bgchnage"></section>
      <section className="SUNfixed">
        <section {...animatedItem[3]} className="SunMoon" />
        <section {...animatedItem[2]} className="SunMoonshadow" />
      </section>
      <nav className="Page07fixed">
        <div className="Pg07textMain">
          <p className="Pg07text01">
            복잡한 서류 제출을 간편하게, 내가 원하는 시간에
          </p>
          <p className="Pg07text02">
            이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할 수
            있습니다.
          </p>
          <div className="Pg07bannerMain">
            <div>
              <a className="Pg07banner01" href="#!">
                마이너스 통장대출
              </a>
            </div>
            <img
              className="Pg07bankbookIcon01"
              src="img/home_arr2.png"
              alt="Pg07bankbook"
            />
            <div>
              <a className="Pg07banner02" href="#!">
                신용대출
              </a>
            </div>
            <img
              className="Pg07bankbookIcon02"
              src="img/home_arr2.png"
              alt="Pg07bankbook"
            />
            <div>
              <a className="Pg07banner03" href="#!">
                개인사업자 대출
              </a>
            </div>
            <img
              className="Pg07bankbookIcon03"
              src="img/home_arr2.png"
              alt="Pg07bankbook"
            />
            <div>
              <a className="Pg07banner04" href="#!">
                전월세보증금 대출
              </a>
            </div>
            <img
              className="Pg07bankbookIcon04"
              src="img/home_arr2.png"
              alt="Pg07bankbook"
            />
          </div>
        </div>
        <div>
          <img className="Pg07bg" src="img/main-loan.png" alt="Pg07bg" />
        </div>
      </nav>
    </section>
  );
};

export default Page07;
