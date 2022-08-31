import React from "react";
import "../styles/NoticeListItem.scss";
import {
  MdOutlineModeEditOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";
const NoticeListItem = ({
  noticeData,
  onRemove,
  onInsertToggle,
  onToggle,
  setSelectNotice,
}) => {
  const { id, title, reg_date } = noticeData;
  const Date = reg_date.split("T");

  return (
    <div className="NoticeListItem">
      <tbody className="List">
        <tr>
          <td className="NoticeID">{id}</td>
          <td className="NoticeTitle">
            <a href="#!">{title}</a>
          </td>
          <td className="NoticeDate">{Date[0]}</td>
        </tr>
      </tbody>
      <div
        className="edit"
        onClick={() => {
          setSelectNotice(noticeData);
          onInsertToggle();
        }}
      >
        <MdOutlineModeEditOutline />
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdOutlineRemoveCircleOutline />
      </div>
    </div>
  );
};

export default NoticeListItem;