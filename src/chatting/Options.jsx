import React from "react";

function Options(props) {
  const data = [
    {
      text: "신규 계좌 개설",
      handler: props.actionProvider.handleNewaccount,
      id: 1,
    },
    {
      text: "대출 신청",
      handler: props.actionProvider.handleNewCardIssuance,
      id: 2,
    },
    {
      text: "잔액 조회",
      handler: props.actionProvider.handleAccountInquiry,
      id: 3,
    },
  ];
  const optionsList = data.map((option) => (
    <button key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));
  return (
    <div>
      <p>{optionsList}</p>
    </div>
  );
}
export default Options;
