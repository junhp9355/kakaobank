import React from "react";
import jQuery from "jquery";
import $ from "jquery";
import "../styles/Page08.scss";
window.$ = window.jQuery = jQuery;

const Page08 = () => {
  $(document).ready(function () {
    var scrollBottom = $(this).scrollTop() + $(window).height();
    var day = Math.round($(".js-reasonable-saving__title").offset().top);
    var night = Math.round(
      $(".js-loan__title").offset().top + $(".js-loan__title").height()
    );

    // card-slider의 width
    var slider_length = 0;

    // check-card__slider__item의 너비
    var card_width = $(".js-check-card__slider__item").outerWidth(true);

    // card-slider의 현재 margin
    var current_margin = 0;

    var clone_card = $(".js-check-card__slider__item")
      .clone()
      .removeClass("active");

    // 체크카드 슬라이더의 width 세팅
    $.setWidth = function () {
      slider_length = 0;

      // 체크카드 슬라이더의 width 계산
      $(".js-check-card__slider__item").each(function () {
        slider_length += card_width;
      });

      $(".js-check-card__slider").css("width", slider_length + "px");
    };

    $.setWidth();

    $(".js-check-card__slider").css("margin-left", 0);

    if (night <= scrollBottom) {
      // 일정 스크롤이 넘어가면 (아래)
      $(".js-loan--night").addClass("active"); // 하늘이 어두워짐
      $(".js-loan__sun").addClass("shadow"); // 태양에 그림자 생김
      $(".js-loan__moon").addClass("rise"); // 달이 뜸
      $(".js-loan__star").addClass("rise");
    }

    if (day >= scrollBottom) {
      // 일정 스크롤이 넘어가면 (위)
      $(".js-loan--night").removeClass("active");
      $(".js-loan__sun").removeClass("shadow");
      $(".js-loan__moon").removeClass("rise");
      $(".js-loan__star").removeClass("rise");
    }

    $(document).scroll(function () {
      scrollBottom = $(this).scrollTop() + $(window).height();

      if (night <= scrollBottom) {
        // 일정 스크롤이 넘어가면 (아래)
        $(".js-loan--night").addClass("active"); // 하늘이 어두워짐
        $(".js-loan__sun").addClass("shadow"); // 태양에 그림자 생김
        $(".js-loan__moon").addClass("rise"); // 달이 뜸
        $(".js-loan__star").addClass("rise");
      }

      if (day >= scrollBottom) {
        // 일정 스크롤이 넘어가면 (위)
        $(".js-loan--night").removeClass("active");
        $(".js-loan__sun").removeClass("shadow");
        $(".js-loan__moon").removeClass("rise");
        $(".js-loan__star").removeClass("rise");
      }

      if ($(this).scrollTop() >= 1265) {
        // 스크롤이 section3에 도달했을 때
        $(".js-reasonable-saving__phone-image").addClass("active");
      }

      if ($(this).scrollTop() >= 500) {
        // 스크롤이 section2에 도달했을 때
        $(".js-global-remittance__hand-image").addClass("active");
      }
    });

    // active된 카드를 제외한 다른 카드를 클릭했을 때
    $(".js-check-card__slider__item:not(.active)").click(function () {
      $(".js-check-card__slider__item").removeClass("active");
      $(this).addClass("active");
    });

    // 이전 버튼을 클릭했을 때
    $(".js-check-card__prev-arrow").click(function () {
      current_margin += card_width;

      $(".js-check-card__slider__item.active").prev().addClass("active");
      $(".js-check-card__slider__item.active").next().removeClass("active");

      $(".js-check-card__slider").removeClass("disable");

      // 첫 카드가 active 상태일 때
      if ($(".js-check-card__slider__item:first-child").hasClass("active")) {
        let new_clone_card = clone_card.clone();
        let item_name = $(".js-check-card__slider__item:first-child")
          .attr("class")
          .split(" ")[2];
        let item_number = item_name.substr(item_name.length - 1);

        if (item_number === 1) {
          $(".js-check-card__slider").prepend(new_clone_card);
        } else {
          $(".js-check-card__slider").prepend(new_clone_card);
        }

        $.setWidth();

        current_margin = -1060;
        $(".js-check-card__slider").addClass("disable");
      }

      $(".js-check-card__slider").css("margin-left", current_margin + "px");
    });

    // 다음 버튼을 클릭했을 때
    $(".js-check-card__next-arrow").click(function () {
      current_margin += card_width * -1;

      $(".js-check-card__slider__item.active").next().addClass("active");
      $(".js-check-card__slider__item.active").prev().removeClass("active");

      $(".js-check-card__slider").removeClass("disable");

      // 마지막 카드가 active 상태일 때
      if ($(".js-check-card__slider__item:last-child").hasClass("active")) {
        let new_clone_card = clone_card.clone();
        let item_name = $(".js-check-card__slider__item:last-child")
          .attr("class")
          .split(" ")[2];
        let item_number = item_name.substr(item_name.length - 1);

        if (item_number === 5) {
          $(".js-check-card__slider").append(new_clone_card[0]);
        } else {
          $(".js-check-card__slider").append(new_clone_card[item_number]);
        }

        $.setWidth();
      }

      $(".js-check-card__slider").css("margin-left", current_margin + "px");
    });
  });
  return (
    <article class="index-article check-card">
      <div class="wrapper">
        <div class="check-card__content">
          <h2 class="check-card__title">
            프렌즈 체크카드,
            <br />
            내가 고르는 선택의 즐거움
          </h2>

          <p class="check-card__description">
            프렌즈 디자인부터 멋스러운 블랙컬러 카드까지 원하는 디자인과 기능을
            선택 할 수 있습니다.
          </p>
        </div>

        {/* <div class="check-card__image">
          <img src="images/img-mweb-card@2x.png" />
        </div> */}

        <div class="check-card__slider__wrapper">
          <div class="check-card__slider js-check-card__slider" role="listbox">
            <div class="check-card__slider__item js-check-card__slider__item item1">
              <img src="img/card-1.png" alt="01" />
            </div>

            <div class="check-card__slider__item js-check-card__slider__item item2 active">
              <img src="img/card-2.png" alt="02" />
            </div>

            <div class="check-card__slider__item js-check-card__slider__item item3 ">
              <img src="img/card-3.png" alt="03" />
            </div>

            <div class="check-card__slider__item js-check-card__slider__item item4">
              <img src="img/card-4.png" alt="04" />
            </div>

            <div class="check-card__slider__item js-check-card__slider__item item5">
              <img src="img/card-5.png" alt="05" />
            </div>
          </div>
        </div>

        <span class="check-card__prev-arrow js-check-card__prev-arrow js-check-card__arrow"></span>
        <span class="check-card__next-arrow js-check-card__next-arrow js-check-card__arrow"></span>
      </div>
    </article>
  );
};
export default Page08;
