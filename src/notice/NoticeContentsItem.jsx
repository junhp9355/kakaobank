import React from "react";

const NoticeContentsItem = ({ noticeData }) => {
  const { id, title, reg_date, contents } = noticeData;
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
    </div>
  );
};

export default NoticeContentsItem;
