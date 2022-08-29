import React from "react";
import NoticeTopMenu from "../components/NoticeTopMenu";
import Bottom from "../components/Bottom";
import "../styles/Notice.css";
// import Scroll_NoticeHome from "../components/Scroll_NoticeHome";

const Notice = () => {
  // const pageColor = {
  //   1: Scroll_NoticeHome(0.8, 0),
  // };
  return (
    <section className="container">
      <div classname="Main">
        <div className="NoticeTopLogo">
          <NoticeTopMenu />
        </div>
        <div className="NoticeBody">
          <div className="NoticeContents">
            <p>공지사항</p>
            <hr />
            <thead>
              <tr>
                <th className="trth01">No</th>
                <th className="trth02">제목</th>
                <th className="trth03">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>326</td>
                <td>
                  <a href="#!">
                    LGU+ 휴대폰 본인확인 서비스 일시 중단 안내 (8/29)
                  </a>
                </td>
                <td>2022.08.29</td>
              </tr>
              <tr>
                <td>325</td>
                <td>
                  <a href="#!">카카오뱅크 마이너스 통장대출 판매 재개 안내</a>
                </td>
                <td>2022.08.26</td>
              </tr>
            </tbody>
          </div>
        </div>
        {/* <div classname="BottomMain">
          <Bottom />
        </div> */}
      </div>
    </section>
  );
};

export default Notice;
