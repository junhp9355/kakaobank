import React from "react";
import "../styles/Page08.css";
import Slick from "../components/Slick";

const Page08 = () => {
  return (
    <section className="Page08">
      <div className="Pg08fixed">
        <div className="pg08textmain">
          <p className="pg08text01">
            프렌즈 체크카드,
            <br />
            내가 고르는 선택의 즐거움
          </p>
          <p className="pg08text02">
            프렌즈 디자인부터 멋스러운 블랙컬러 카드까지 원하는 디자인과 기능을
            선택 할 수 있습니다.
          </p>
          <div className="pg08bannermain">
            <a className="pg08banner" href="#!">
              카카오뱅크 프렌즈 체크카드
              <img
                className="Pg08bankbookIcon"
                src="img/home_arr.png"
                alt="Pg08bankbook"
              />
            </a>
          </div>
        </div>
        <div className="slick">
          <Slick />
        </div>
      </div>
    </section>
  );
};
export default Page08;
