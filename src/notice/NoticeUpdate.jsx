import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/NoticeInsert.scss";
import "../styles/NoticeWrite.css";
import { Link } from "react-router-dom";
import Bottom from "../components/Bottom";
import NoticeTopMenu from "../notice/NoticeTopMenu";
import axios from "axios";

const NoticeInsert = () => {
  // const [value, setValue] = useState("");
  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   onUpdate(selectNotice.id, value);
  //   setValue("");
  // };
  // useEffect(() => {
  //   setValue(selectNotice.title);
  // }, [selectNotice]);

  // const onUpdate = async (id, title) => {
  //   try {
  //     const data = await axios.patch(`http://localhost:4000/kakaobank/${id}`, {
  //       title,
  //       reg_date: moment().format("YYYY-MM-DD"),
  //     });
  //     setNotice(data.data);
  //     onInsertToggle();
  //   } catch (e) {
  //     setError(e);
  //   }
  // };

  const [contentItem, setContentItem] = useState([]);
  const [selectNotice, setSelectNotice] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
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

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   onInsert(title, contents);
  //   setTitle("");
  //   setContents("");
  // };

  return (
    <form className="TodoInsert">
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
            onChange={onChangeTitle}
          />
          <div className="blank"></div>
          <div>내용</div>
          <textarea
            className="NoticeWriteContents"
            placeholder={contentItem.contents}
            type="text"
            onChange={onChangeContents}
          />
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

        <div classname="BottomMain">
          <Bottom />
        </div>
      </div>
    </form>
  );
};

export default NoticeInsert;
