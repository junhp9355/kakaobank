import React, { useEffect, useState } from "react";
import NoticeTopMenu from "../notice/NoticeTopMenu";
import Bottom from "../components/Bottom";
import "../styles/Notice.css";
import axios from "axios";
import NoticeEdit from "./NoticeEdit";
import NoticeList from "./NoticeList";
import moment from "moment";
import { Link } from "react-router-dom";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  const [selectNotice, setSelectNotice] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const onInsert = async (title) => {
  //   try {
  //     const data = await axios.post("http://localhost:4000/Notice", {
  //       title,
  //     });
  //     setNotice(data.data);
  //   } catch (e) {
  //     setError(e);
  //   }
  // };

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

  const onRemove = async (id) => {
    const data = await axios.delete(`http://localhost:4000/kakaobank/${id}`);
    setNotice(data.data);
  };

  const onUpdate = async (id, title) => {
    try {
      const data = await axios.patch(`http://localhost:4000/kakaobank/${id}`, {
        title,
        reg_date: moment().format("YYYY-MM-DD"),
      });
      setNotice(data.data);
      onInsertToggle();
    } catch (e) {
      setError(e);
    }
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
    <section className="container">
      <div classname="Main">
        <div className="NoticeTopLogo">
          <NoticeTopMenu />
        </div>
        <div className="NoticeBody">
          <div className="NoticeContents">
            <p>공지사항</p>
            <hr />
            <thead>
              <tr>
                <th className="trth01">No</th>
                <th className="trth02">제목</th>
                <th className="trth03">등록일</th>
              </tr>
            </thead>
          </div>
          <div className="NoticeList">
            <NoticeList
              notice={notice}
              onRemove={onRemove}
              onToggle={onToggle}
              onInsertToggle={onInsertToggle}
              setSelectNotice={setSelectNotice}
            />
            {insertToggle && (
              <NoticeEdit
                onInsertToggle={onInsertToggle}
                selectNotice={selectNotice}
                onUpdate={onUpdate}
              />
            )}
            <Link to="/Notice/Write">
              <button className="NoticeWritebutton" type="submit">
                글쓰기
              </button>
            </Link>
          </div>
        </div>
        <div classname="BottomMain">
          <Bottom />
        </div>
      </div>
    </section>
  );
};

export default Notice;
