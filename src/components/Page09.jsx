import React from "react";
import "../styles/Page09.css";

const Page09 = () => {
  return (
    <section className="Page09">
      <nav className="Page09fixed">
        <div className="pg09textmain">
          <p className="pg09text01">
            IT 기술로 카카오뱅크를
            <br />
            만들어 갑니다.
          </p>
          <div className="pg09bar" />
        </div>

        <div className="pg09imgmain">
          <img className="pg09img" src="img/home_it.png" alt="pg09" />
          <div className="pg09imgtextmain">
            <div className="pg09imgtextfixed">
              <p className="pg09imgtext01">간결하고, 유려하게</p>
              <p className="pg09imgtext02">
                작은 모바일 화면에 적합하도록
                <br />
                복잡함을 덜어낸
                <br />
                유려하고 친화적인 UX
              </p>
            </div>

            <div className="pg09imgtextfixed">
              <p className="pg09imgtext01">간편한 인증, 철저한 보안</p>
              <p className="pg09imgtext02">
                지문, 비밀번호로 간편한 인증
                <br />
                IT 기술의 강력한 보안 검증과
                <br />
                데이터 암호화
              </p>
            </div>
            <div className="pg09imgtextfixed"></div>
            <div className="pg09imgtextfixed">
              <p className="pg09imgtext01">Mobile First, One App</p>
              <p className="pg09imgtext02">
                모바일에서 뱅킹이 더 쉽고 편리하게
                <br />
                여러 앱을 설치할 필요 없이
                <br />
                하나의 앱으로
              </p>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Page09;
