import React, { useEffect, useState } from "react";
import "../styles/NoticeEdit.scss";

const NoticeEdit = ({ selectNotice, onUpdate, onInsertToggle }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(selectNotice.id, value);
    setValue("");
  };
  useEffect(() => {
    setValue(selectNotice.title);
  }, [selectNotice]);

  return (
    <div className="background">
      <form className="Noticeedit__insert" onSubmit={onSubmit}>
        <h2>수정하기</h2>
        <input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
};

export default NoticeEdit;
