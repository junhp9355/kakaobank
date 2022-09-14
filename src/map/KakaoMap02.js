/*global kakao */
import React, { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.395513639400676, 127.11217578220112),
      level: 3,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.395513639400676,
      127.11217578220112
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
      text: "텍스트를 표시할 수 있어요!",
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);

    var iwContent =
        '<div style="padding-top:7px; padding-bottom:5px;"><a href="https://map.kakao.com/?itemId=27578089" style="color:black; padding-left:38px;" target="_blank">카카오뱅크</a></div>',
      iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  };

  return <div id="map" style={{ width: "1080px", height: "400px" }}></div>;
}
