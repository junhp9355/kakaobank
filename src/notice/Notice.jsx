import React, { useEffect, useState } from "react";
import NoticeTopMenu from "../notice/NoticeTopMenu";
import NoticeBottom from "./NoticeBottom";
import "../styles/Notice.css";
import axios from "axios";
import NoticeEdit from "./NoticeEdit";
import NoticeList from "./NoticeList";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import Posts from "./Posts";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  const [selectNotice, setSelectNotice] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onToggle = async (id) => {
    try {
      const data = await axios.patch(
        `http://localhost:4000/kakaobank/abc/${id}`
      );
      setNotice(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/kakaobank",
          method: "get",
        });
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
    <section className="Noticecontainer">
      <div classname="NoticeMain">
        <div className="NoticeTopLogo">
          <NoticeTopMenu />
        </div>
        <div className="NoticeBody">
          <div className="NoticeContents">
            <p>공지사항</p>
            <hr />
            <br />
            <div className="NoticeSubTitle">
              <tr>
                <th className="trth01">No</th>
                <th className="trth02">제목</th>
                <th className="trth03">등록일</th>
              </tr>
            </div>
          </div>
          <div className="NoticeList">
            <NoticeList
              notice={notice}
              onToggle={onToggle}
              onInsertToggle={onInsertToggle}
              setSelectNotice={setSelectNotice}
            />
            {/* {insertToggle && (
              <NoticeEdit
                onInsertToggle={onInsertToggle}
                selectNotice={selectNotice}
                onUpdate={onUpdate}
              />
            )} */}
          </div>
        </div>
      </div>
      <div className="NoticeBottomPosition">
        <NoticeBottom />
      </div>
    </section>
  );
};

export default Notice;
