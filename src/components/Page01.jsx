import React from "react";
import "../styles/Page01.css";

const Page01 = () => {
  return (
    <section className="Page01">
      <div className="Page01background">
        <div className="area01">
          <h3 className="text01-1">
            이미 모두의 은행
            <br />
            지금은 카카오뱅크
            <p className="text01-2">
              한 사람, 한 사람을 위해 시작한 은행이
              <br />더 많은 사람들이 찾는 모두의 은행이 되었습니다.
            </p>
            <p className="text01-2">
              보내고, 받고, 모으고, 쓰는
              <br />
              당신의 모든 일이 바뀌고 있습니다.
            </p>
          </h3>

          <img className="img01" src="img/main-bg3.png" alt="main01" />

          <section className="Page01Icons">
            <div className="iconBanner">
              <a href="#!" className="googleIconName">
                Google Play
                <div className="icon">
                  <img
                    className="googleIcon"
                    src="img/kakaobank icon.png"
                    alt="googleIcon"
                  ></img>
                </div>
              </a>
            </div>

            <div className="iconBanner2">
              <a href="#!" className="appleIconName">
                App Store
                <div className="icon2">
                  <img
                    className="appleIcon"
                    src="img/kakaobank icon.png"
                    alt="appleIcon"
                  ></img>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Page01;
