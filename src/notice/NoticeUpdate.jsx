import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/NoticeWrite.css";
import "../styles/NoticeUpdate.css";
import { Link } from "react-router-dom";
import NoticeBottom from "./NoticeBottom";
import NoticeTopMenu from "../notice/NoticeTopMenu";
import axios from "axios";

const NoticeInsert = () => {
  const [contentItem, setContentItem] = useState([]);
  const [selectNotice, setSelectNotice] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [value, setValue] = useState("");

  const onUpdate = async (title, contents) => {
    try {
      const data = await axios.patch(`http://localhost:4000/kakaobank/${id}`, {
        title,
        contents,
      });
      setContentItem(data.data);
      onInsertToggle();
    } catch (e) {
      setError(e);
    }
  };

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

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(title, contents);
    setTitle("");
    setContents("");
  };

  return (
    <form className="NoticeInsert" onSubmit={onSubmit}>
      <div classname="UpdateMain">
        <div className="NoticeTopLogo">
          <NoticeTopMenu />
        </div>
        <div className="NoticeUpdateBody">
          <div className="UpdateContents">
            <p className="UpdateTitle">수정하기</p>
            <hr />
          </div>
          <section className="UpdateBody">
            <br />
            <div className="UpdateText02">제목</div>
            <input
              placeholder={contentItem.title}
              className="NoticeUpdateTitle"
              type="text"
              value={title}
              onChange={onChangeTitle}
            />
            <br />
            <br />
            <br />
            <div className="UpdateText01">내용</div>
            <textarea
              className="NoticeUpdateContents"
              placeholder={contentItem.contents}
              type="text"
              value={contents}
              onChange={onChangeContents}
            />
          </section>
        </div>
        <div className="Updatebuttonfixed">
          <button
            className="NoticeUpdateSave"
            type="submit"
            onClick={() => {
              alert("저장되었습니다!");
            }}
          >
            저장
          </button>
          <Link to="/notice">
            <button className="NoticeUpdateList" type="submit">
              목록
            </button>
          </Link>
        </div>
        <div className="NoticeBottomPosition">
          <NoticeBottom />
        </div>
      </div>
    </form>
  );
};

export default NoticeInsert;
