import React from "react";
import Slider from "react-slick";
import "../styles/slick.css";
import "../styles/slick-theme.css";

const Slick = () => {
  // const SampleNextArrow = (props) => {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "" }}
  //       onClick={onClick}
  //     />
  //   );
  // };

  // const SamplePrevArrow = (props) => {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "" }}
  //       onClick={onClick}
  //     />
  //   );
  // };

  const settings = {
    dots: false, //carousel 밑에 지정 콘텐츠로 바로 이동할 수 있는 버튼을 뜻한다. flase 할시 사라진다.
    infinite: true, // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복한다.
    speed: 350, //콘텐츠를 넘어갈 때 속도이다.단위 (ms)이다. 1000ms = 1s
    slidesToShow: 3, //한 화면에 보이는 콘텐츠 개수를 말한다.
    slidesToScroll: 1, //한 번에 넘어가는 콘텐츠 수이다. 2로 정하면 2개씩 넘어간다.
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="Con">
      <Slider {...settings}>
        <div className="imgFixed">
          <img className="item" src="img/card-1.png" alt="01" />
        </div>
        <div className="imgFixed">
          <img className="item" src="img/card-2.png" alt="01" />
        </div>
        <div className="imgFixed">
          <img className="item" src="img/card-3.png" alt="01" />
        </div>
        <div className="imgFixed">
          <img className="item" src="img/card-4.png" alt="01" />
        </div>
        <div className="imgFixed">
          <img className="item" src="img/card-5.png" alt="01" />
        </div>
      </Slider>
    </div>
  );
};
export default Slick;
