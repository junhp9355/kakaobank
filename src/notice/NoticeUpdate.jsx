import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/NoticeInsert.scss";
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
    <form className="TodoInsert" onSubmit={onSubmit}>
      <div classname="Main">
        <div className="NoticeTopLogo">
          <NoticeTopMenu />
        </div>
        <div className="NoticeBody">
          <div className="NoticeContents">
            <p>수정하기</p>
            <hr />
          </div>
          <div>제목</div>
          <input
            placeholder={contentItem.title}
            className="NoticeWriteTitle"
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
          <div className="blank"></div>
          <div>내용</div>
          <textarea
            className="NoticeWriteContents"
            placeholder={contentItem.contents}
            type="text"
            value={contents}
            onChange={onChangeContents}
          />
        </div>
        <div>
          <button
            className="NoticeWriteSave"
            type="submit"
            onClick={() => {
              alert("저장되었습니다!");
            }}
          >
            저장
          </button>
          <Link to="/notice">
            <button className="NoticeWriteList" type="submit">
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
