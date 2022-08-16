import React from "react";
import "../styles/Page05.css";

const Page05 = () => {
  return (
    <section className="Page05">
      <nav className="Page05fixed">
        <div className="Pg05body">
          <div className="Pg05textMain">
            <p className="Pg05text01">
              함께 도전해서
              <br />
              재미있는 26주적금
            </p>
            <p className="Pg05text02">
              26주동안 변화하는 재미에 빠져있는 사이
              <br />
              어느덧 만기 달성 경험을 맛보게 됩니다.
            </p>
            <a className="Pg05benner" href="#!">
              26주적금
            </a>
            <img
              className="Pg05bankbookIcon"
              src="img/home_arr.png"
              alt="Pg05bankbook"
            />
          </div>
          <img className="Pg05bg" src="img/main-26weeks.png" alt="Pg05bg" />
        </div>
      </nav>
    </section>
  );
};

export default Page05;
