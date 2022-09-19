import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/Notice.css";
import "../styles/NoticeContents.css";
import "../styles/Bottom.css";
import NoticeTopMenu from "./NoticeTopMenu";
import NoticeBottom from "./NoticeBottom";
import Date from "./Date";
import parse from "html-react-parser";

const NoticeContents = () => {
  const [contentItem, setContentItem] = useState([]);
  const [selectNotice, setSelectNotice] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, [id]);

  const getItem = async (id) => {
    try {
      const data = await axios.get(`http://localhost:4000/kakaobank/${id}`);
      setContentItem(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };
  const onRemove = async (id) => {
    const data = await axios.delete(`http://localhost:4000/kakaobank/${id}`);
    setContentItem(data.data);
  };

  const Datedate = (contentItem.reg_date || "").split("T");
  const contentText = `<pre>${contentItem.contents}</pre>`;

  return (
    <body className="CotentSystembody">
      <section className="Contentscontainer">
        <div classname="ContentsMain">
          <div className="NoticeTopLogo">
            <NoticeTopMenu />
          </div>
          <div className="ContentsMainBody">
            <p className="ContentsTitle">공지사항</p>
            <hr />
            <div className="contentBody">
              <br />
              <div className="contentTitleFixed">
                <div className="contentTitle">{contentItem.title}</div>
                <div className="contentDate">{Datedate[0]}</div>
              </div>
              <div className="contentTextFixed">
                <pre className="contentText">{parse(contentText)}</pre>
              </div>
              <br />
            </div>
          </div>
          <div className="contentButton">
            <Link to={`/notice/${id}/edit`}>
              <button className="contentedit">수정</button>
            </Link>
            <Link to="/notice">
              <button
                className="contentremove"
                onClick={() => {
                  onRemove(contentItem.id);
                  // alert("삭제되었습니다!");
                }}
              >
                삭제
              </button>
            </Link>
            <Link to="/notice">
              <button className="contentListbutton" type="submit">
                목록
              </button>
            </Link>
          </div>
        </div>
      </section>
      <NoticeBottom />
    </body>
  );
};
export default NoticeContents;
