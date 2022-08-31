import React, { useState } from "react";
import "../styles/NoticeInsert.scss";
import "../styles/NoticeWrite.css";
import { Link } from "react-router-dom";
import Bottom from "../components/Bottom";
import NoticeTopMenu from "../notice/NoticeTopMenu";
import axios from "axios";

const NoticeInsert = () => {
  const [notice, setNotice] = useState([]);

  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [error, setError] = useState(null);

  const onInsert = async (title, body) => {
    try {
      const data = await axios.post("http://localhost:4000/kakaobank", {
        title,
        body,
      });
      setNotice(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onChange1 = (e) => {
    setValue1(e.target.value1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
    setValue1("");
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <div classname="Main">
        <div className="NoticeTopLogo">
          <NoticeTopMenu />
        </div>
        <div className="NoticeBody">
          <div className="NoticeContents">
            <p>글쓰기</p>
            <hr />
          </div>
          <div>제목</div>
          <input
            placeholder="제목을 입력하세요"
            className="NoticeWriteTitle"
            type="text"
            value={value}
            onChange={onChange}
          />
          <div>내용</div>
          <textarea
            className="NoticeWriteContents"
            type="text"
            placeholder="내용을 입력하세요"
            value={value}
            onChange={onChange1}
          />
          <button className="NoticeWriteSave" type="submit">
            저장
          </button>
          <Link to="/Notice">
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
