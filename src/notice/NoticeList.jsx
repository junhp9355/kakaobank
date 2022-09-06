import React from "react";
import "../styles/NoticeList.scss";
import "../styles/NoticeListItem.scss";
import Date from "./Date";
import { Link } from "react-router-dom";

const NoticeList = ({
  notice,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectNotice,
  changeSelectNotice,
  setNotice,
}) => {
  const { reg_date } = notice;
  return (
    <ul className="TodoList">
      <div className="NoticeListItem">
        <tbody className="List">
          <tr>
            {notice.map((item, index) => (
              <Link to={`/notice/${item.id}`}>
                <td className="NoticeID">{item.id}</td>
                <td className="NoticeTitle">
                  <a href="#!">{item.title}</a>
                </td>
                <td className="NoticeDate">
                  <Date item={item} />
                </td>
              </Link>
            ))}
          </tr>
        </tbody>
      </div>
    </ul>
  );
};

export default NoticeList;
