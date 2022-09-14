import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "../chatting/Chat.css";

const socket = io.connect("http://localhost:5000");

function Chat() {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessageHandler = () => {
    socket.emit("message", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("message", (message) => {
      setChat([...chat, message]);
    });
  }, [chat]);

  return (
    <div className="Chat">
      <div>
        <h1>
          Messages
          <hr />
        </h1>
        <div className="MessagesBox">
          <ul className="MessagesArea">
            {chat.map((data, idx) => {
              return (
                <li className="MessagesText" key={idx}>
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <br />
      <div className="ChatBox">
        <input
          className="ChatInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="SandButton" onClick={sendMessageHandler}>
          보내기
        </button>
      </div>
    </div>
  );
}

export default Chat;
