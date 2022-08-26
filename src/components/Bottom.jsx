import React from "react";
import "../styles/Bottom.css";

const Bottom = () => {
  return (
    <section className="Bottom">
      <nav className="Bottomfixed">
        <div className="BottomLink">
          <div className="BottomLink01">
            <a href="#!">모바일뱅킹 서비스 이용약관</a>
            <div className="bar" />
            <a href="#!">전자금융거래 기본약관</a>
            <div className="bar" />
            <a className="bold" href="#!">
              위치기반 서비스 이용약관
            </a>
            <div className="bar" />
            <a className="bold" href="#!">
              개인정보처리방침
            </a>
            <div className="bar" />
            <a className="bold" href="#!">
              전자민원접수
            </a>
            <div className="bar" />
            <a href="#!">보호금융상품등록부</a>
            <div className="bar" />
            <a href="#!">상품공시실</a>
            <div className="bar" />
            <a href="#!">경영공시</a>
            <div className="bar" />
            <a href="#!">공지사항</a>
            <br />
            {/* </div>
          <div className="BottomLink02"> */}
            <a href="#!">전자서명인증업무준칙</a>
            <div className="bar" />
            <a href="#!">카카오뱅크 인증서 서비스 이용약관</a>
            <div className="bar" />
            <a href="#!">카카오뱅크 인증서 서비스 개인정보처리방침</a>
          </div>
        </div>
        <div className="Bottomtext">
          <p>(주)카카오뱅크∙윤호영∙사업자번호 375-88-00197</p>
          <p>대표전화 1599-3333</p>
          <p>(해외 +82-2-6420-3333)</p>
        </div>
        <div className="Bottomtext02">
          <p className="bold">
            Copyright © KakaoBank Corp. All rights reserved.
          </p>
        </div>

        <div className="bottomimgmain">
          <img
            className="bottomimg"
            src="img/webaccessibility.png"
            alt="webaccessibility"
          />
          <p>웹 접근성 품질인증</p>
          <div className="BottomIcon">
            <a className="BottomIcons" href="#!">
              <div className="BottomFacebookicon" />
            </a>
            <a className="BottomIcons" href="#!">
              <div className="BottomInstagramicon" />
            </a>
            <a className="BottomIcons" href="#!">
              <div className="BottomYoutubeicon" />
            </a>
            <a className="BottomIcons" href="#!">
              <div className="BottomBrunchicon" />
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Bottom;
