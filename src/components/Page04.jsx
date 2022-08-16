import React from "react";
import "../styles/Page04.css";

const Page04 = () => {
  return (
    <section className="Page04">
      <nav className="Page04fixed">
        <div>
          <img className="Pg04bg" src="img/main-moim.png" alt="Pg04bg" />
        </div>
        <div className="Pg04textMain">
          <p className="Pg03text01">
            함께 쓰고 같이 보는
            <br />
            모임통장
          </p>
          <p className="Pg04text02">
            카카오톡 친구를 바로 모임통장으로 초대하고
            <br />
            친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.
            <br />
            재미있는 메시지 카드로 회비 입금 요청도 해보세요.
          </p>
          <div className="Pg04bannerMain">
            <a href="#!" className="Pg04banner">
              모임통장
            </a>
            <img
              className="Pg04bankbookIcon"
              src="img/home_arr.png"
              alt="Pg04bankbook"
            />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Page04;
