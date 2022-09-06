import React from "react";

const Date = ({ item }) => {
  const contentDate = item.reg_date.split("T");
  return <div>{contentDate[0]}</div>;
};

export default Date;
