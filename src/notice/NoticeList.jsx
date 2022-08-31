import React from "react";
import "../styles/NoticeList.scss";
import NoticeListItem from "./NoticeListItem";

const NoticeList = ({
  notice,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectNotice,
  changeSelectNotice,
  setNotice,
}) => {
  return (
    <ul className="TodoList">
      {notice.map((noticeData, index) => (
        <NoticeListItem
          noticeData={noticeData}
          key={index}
          onRemove={onRemove}
          onToggle={onToggle}
          onInsertToggle={onInsertToggle}
          setSelectNotice={setSelectNotice}
          changeSelectNotice={changeSelectNotice}
          setNotice={setNotice}
        />
      ))}
    </ul>
  );
};

export default NoticeList;
