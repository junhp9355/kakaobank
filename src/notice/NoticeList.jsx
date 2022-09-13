import React, { useState } from "react";
import "../styles/NoticeList.scss";
import "../styles/NoticeListItem.scss";
import Date from "./Date";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const NoticeList = ({
  notice,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectNotice,
  changeSelectNotice,
  setNotice,
  page,
  limit,
  setPage,
}) => {
  const offset = (page - 1) * limit;
  return (
    <ul className="NoticeList">
      <div className="NoticeListItem">
        <tbody className="List">
          <tr>
            {notice.slice(offset, offset + limit).map((item, index) => (
              <section className="NoticeListItemFixed">
                <td className="NoticeID">{item.id}</td>
                <td className="NoticeTitle">
                  <Link
                    to={`/notice/${item.id}`}
                    style={{ textDecoration: "none", cursor: "default" }}
                  >
                    <a href="#!">{item.title}</a>
                  </Link>
                </td>
                <td className="NoticeDate">
                  <Date item={item} />
                </td>
              </section>
            ))}
          </tr>
        </tbody>
      </div>
      <div className="PageNav">
        <div className="PageNum">
          <Pagination
            total={notice.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </div>
        <Link to="/notice/Write">
          <button className="NoticeWritebutton" type="submit">
            글쓰기
          </button>
        </Link>
      </div>
    </ul>
  );
};

export default NoticeList;
