import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Notice from "./notice/Notice";
import NoticeInsert from "./notice/NoticeInsert";
import NoticeUpdate from "./notice/NoticeUpdate";
import NoticeContents from "./notice/NoticeContents";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/notice/Write" element={<NoticeInsert />} />
      <Route path="/notice/:id" element={<NoticeContents />} />
      <Route path="/notice/:id/edit" element={<NoticeUpdate />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
