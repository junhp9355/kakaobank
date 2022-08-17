import React from "react";
import "../styles/Page06.css";
import Scroll from './Scroll';

const Page06 = () => {
  const animatedItem = {
    1: Scroll('up', 1.4, 0.1),
  };
  return (
    <section className="Page06">
      <nav className="Page06fixed">
        <div>
          <img {...animatedItem[1]}
            className="Pg06bg"
            src="img/main-foreignRemittance-new.png"
            alt="Pg06bg"
          />
        </div>
        <div className="Pg06body">
          <p className="Pg06text01">
            해외계좌송금과
            <br />
            WU빠른해외송금을
            <br />더 쉽고, 저렴하게
          </p>
          <p className="Pg06text02">
            해외계좌송금이 가능한 22개국을 포함하여
            <br />
            전세계 200여개국으로
            <br />
            WU빠른해외송금이 가능합니다.
          </p>
          <a className="Pg06banner" href="#!">
            해외송금
          </a>
          <img
            className="Pg06bankbookIcon"
            src="img/home_arr.png"
            alt="Pg06bankbook"
          />
        </div>
        
      </nav>
    </section>
  );
};

export default Page06;
