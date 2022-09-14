import React from "react";
import MapBottom from "./MapBottom";
import MapTopMenue from "./MapTopMenu";
import "../styles/Map.css";
import KakaoMap02 from "./KakaoMap02";
import KakaoMap03 from "./KakaoMap03";

const Map = () => {
  return (
    <section className="MapMain">
      <MapTopMenue />
      <nav className="MapFixed">
        <div className="MapBody">
          <div className="MapTitle">
            오시는길
            <hr />
          </div>

          <div className="MapText">
            <p>판교오피스</p>
            <div className="MapSubText01">
              <p>주소</p>
              <div className="Mapspace" />
              <p>
                경기도 성남시 분당구 분당내곡로 131, 11층(백현동, 판교테크원)
              </p>
            </div>
            <div className="MapSubText02">
              <p>전화</p>
              <div className="Mapspace" />
              <p>02-6288-6000</p>
            </div>
            <KakaoMap02 />
            <br />
            <br />
            <br />

            <p>서울오피스 (고객센터)</p>
            <div className="MapSubText01">
              <p>주소</p>
              <div className="Mapspace" />
              <p>서울특별시 영등포구 여의대로 108 파크원 타워 2 35층</p>
            </div>
            <div className="MapSubText02">
              <p>전화</p>
              <div className="Mapspace" />
              <p>1599-3333</p>
            </div>
            <KakaoMap03 />
          </div>
        </div>
      </nav>
      <MapBottom />
    </section>
  );
};
export default Map;
