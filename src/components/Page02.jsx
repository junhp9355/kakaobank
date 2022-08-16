import React from "react";
import "../styles/Page02.css";

const Page02 = () => {
  return (
    <section className="Page02">
      <nav className="Page02nav">
        <div>
          <img
            src="img/main-withdrawal.png"
            alt="page2bg"
            className="Page02BGimg"
          />
        </div>
        <div className="Page02text">
          <p className="Pg2text1">
            모바일로 더 손쉬운 <br />
            계좌개설, 간편한 이체
          </p>
          <p className="Pg2text2">
            인증서, OTP 없이 계좌 개설이 간편합니다.
            <br />
            여러 건의 이체도 몇 번의 터치로 손쉽게 보낼 수 있습니다.
          </p>
          <a href="#!" className="Pg2banner1">
            카카오뱅크 입출금통장
          </a>
          <div className="Pg02Icon">
            <img
              className="Pg02bankbookIcon"
              src="img/home_arr.png"
              alt="bankbook"
            />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Page02;
