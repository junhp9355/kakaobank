import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/Notice.css";
import "../styles/NoticeContents.css";
import "../styles/Bottom.css";
import NoticeTopMenu from "./NoticeTopMenu";
import NoticeBottom from "./NoticeBottom";

const NoticeContents = ({ props }) => {
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

  return (
    <section className="container">
      <div classname="Main">
        <div className="NoticeTopLogo">
          <NoticeTopMenu />
        </div>
        <div className="contentBody">
          <br />
          <div className="contentTitle">{contentItem.title}</div>
          <br />
          <pre className="contentText">{contentItem.contents}</pre>
          <br />
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
        <br />
        <br />
        <div className="NoticeBottomPosition">
          <NoticeBottom />
        </div>
      </div>
    </section>
  );
};
export default NoticeContents;
