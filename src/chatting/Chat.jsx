import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "../chatting/Chat.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const Chat = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <section>
      <div className="App">
        <button className="open" onClick={togglePopup} value="false">
          채팅 상담
        </button>
        {showPopup ? (
          <div>
            <div>
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                headerText="카카오뱅크 고객센터"
                placeholderText="메시지를 입력하세요."
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Chat;
