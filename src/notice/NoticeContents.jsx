import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticeContentsItem from "./NoticeContentsItem";

const NoticeContents = ({ props, match }) => {
  const [notice, setNotice] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get("http://localhost:4000/kakaobank");
        setNotice(data.data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  if (error) {
    console.log(error);
    return <>에러:{error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <section>
      <div>콘텐츠 페이지</div>
      {notice.map((noticeData) => (
        <NoticeContentsItem noticeData={noticeData} setNotice={setNotice} />
      ))}
    </section>
  );
};
export default NoticeContents;
