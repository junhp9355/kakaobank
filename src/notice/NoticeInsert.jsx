import React, { useState } from "react";
import "../styles/NoticeInsert.scss";
import "../styles/NoticeWrite.css";
import { Link } from "react-router-dom";
import Bottom from "../components/Bottom";
import NoticeTopMenu from "../notice/NoticeTopMenu";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
            value={title}
            onChange={onChangeTitle}
          />
          <div className="blank"></div>
          <div>내용</div>
          <CKEditor
            className="CKEditor"
            editor={ClassicEditor}
            config={{ placeholder: "내용을 입력하세요" }}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
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
