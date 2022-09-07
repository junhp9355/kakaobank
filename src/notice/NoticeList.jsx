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
}) => {
  // const { reg_date } = notice;
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <ul className="NoticeList">
      <div className="NoticeListItem">
        <tbody className="List">
          <tr>
            {notice.slice(offset, offset + limit).map((item, index) => (
              <Link
                to={`/notice/${item.id}`}
                style={{ textDecoration: "none", cursor: "default" }}
              >
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
        {/* <label>
          페이지 당 표시할 게시물 수:&nbsp;
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label> */}
      </div>
    </ul>
  );
};

export default NoticeList;
