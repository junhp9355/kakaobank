import React from "react";
import "../styles/Page03.css";

const Page03 = () => {
  return (
    <section className="Page03">
      <nav className="Page03fixed">
        <div>
          <img className="Page03bg" src="img/main-savings.png" alt="Page03bg" />
        </div>
        <div>
          <img
            className="Page03SubBg"
            src="img/main-savings-money.png"
            alt="Page03SubBg"
          />
        </div>
        <nav className="Pg03body">
          <div className="Pg03text">
            <p className="Pg03text01">
              우대조건 없이
              <br />
              합리적인 예금과 적음
            </p>
            <div className="Pg03text02">
              기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?
              <br />
              카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고
              합리적입니다.
            </div>
          </div>
          <div className="Pg03bannerMain">
            <a href="#!" className="Pg03banner01">
              정기예금
            </a>
            <img
              className="Pg03bankbookIcon01"
              src="img/home_arr.png"
              alt="bankbook02"
            />
            <a href="#!" className="Pg03banner02">
              자유적금
            </a>
            <img
              className="Pg03bankbookIcon02"
              src="img/home_arr.png"
              alt="bankbook03"
            />
          </div>
        </nav>
      </nav>
    </section>
  );
};

export default Page03;
