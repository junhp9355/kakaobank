import React from "react";
import "../styles/Page08.css";

const Page08 = () => {
  //   const items = document.querySelectorAll("img");
  //   const itemCount = items.length;
  //   const nextItem = document.querySelector(".next");
  //   const previousItem = document.querySelector(".previous");
  //   let count = 0;

  //   function showNextItem() {
  //     items[count].classList.remove("active");

  //     if (count < itemCount - 1) {
  //       count++;
  //     } else {
  //       count = 0;
  //     }

  //     items[count].classList.add("active");
  //     console.log(count);
  //   }

  //   function showPreviousItem() {
  //     items[count].classList.remove("active");

  //     if (count > 0) {
  //       count--;
  //     } else {
  //       count = itemCount - 1;
  //     }

  //     items[count].classList.add("active");
  //     console.log(count);
  //   }

  //   function keyPress(e) {
  //     e = e || window.event;

  //     if (e.keyCode === "37") {
  //       showPreviousItem();
  //     } else if (e.keyCode === "39") {
  //       showNextItem();
  //     }
  //   }

  //   nextItem.addEventListener("click", showNextItem);
  //   previousItem.addEventListener("click", showPreviousItem);
  //   document.addEventListener("keydown", keyPress);

  return (
    <section className="Page08">
      <section className="Page08fixed">
        <nav>
          <div className="Pg08body">
            <p className="Pg08text01">
              프렌즈 체크카드,
              <br />
              내가 고르는 선택의 즐거움
            </p>
            <p className="Pg08text02">
              프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 디자인과
              기능을 선택할 수 있습니다.
            </p>
            <div>
              <a className="Pg08banner" href="#!">
                카카오뱅크 프렌즈 체크카드
              </a>
            </div>
          </div>
          <div className="CardSlideMain">
            <div className="Cardfixed">
              <img src="img/card-1.png" alt="card1" />

              <img src="img/card-2.png" alt="card2" />

              <img src="img/card-3.png" alt="card3" />

              <img src="img/card-4.png" alt="card4" />

              <img src="img/card-5.png" alt="card5" />
            </div>
            <div className="button">
              <img src="img/img-left.png" alt="left" />
              <img src="img/img-right.png" alt="right" />
            </div>
          </div>
        </nav>
      </section>
    </section>
  );
};

export default Page08;
