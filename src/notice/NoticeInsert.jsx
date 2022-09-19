import React, { useState } from "react";
import "../styles/NoticeWrite.css";
import { Link } from "react-router-dom";
import NoticeBottom from "./NoticeBottom";
import NoticeTopMenu from "../notice/NoticeTopMenu";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../styles/Editor.css";
import Editor from "./Editor";

const NoticeInsert = () => {
  const [notice, setNotice] = useState([]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [error, setError] = useState(null);

  const onInsert = async (title, contents) => {
    try {
      const data = await axios.post("http://localhost:4000/kakaobank", {
        title,
        contents,
      });
      setNotice(data.data);
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

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(title, contents);
    setTitle("");
    setContents("");
  };

  return (
    <form className="NoticeInsert" onSubmit={onSubmit}>
      <div classname="InsertMain">
        <div className="NoticeTopLogo">
          <NoticeTopMenu />
        </div>
        <div className="NoticeBody">
          <div className="NoticeContents">
            <p>글쓰기</p>
            <hr />
          </div>
          <div className="InsertMain">
            <div className="InsertText">제목</div>
            <input
              placeholder="제목을 입력하세요"
              className="NoticeWriteTitle"
              type="text"
              // value={title}
              onChange={onChangeTitle}
            />
            <div className="blank"></div>
            <div className="InsertText">내용</div>
            <div className="NoticeWriteContents">
              <CKEditor
                className="CKEditor"
                editor={ClassicEditor}
                config={{ placeholder: "내용을 입력하세요" }}
                onReady={(editor) => {
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                  setContents(data);
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
          </div>
          <br />
          <div className="Writebuttonfixed">
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
        </div>
      </div>
      <NoticeBottom />
    </form>
  );
};

export default NoticeInsert;
