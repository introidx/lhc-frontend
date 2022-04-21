import React, { useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import base_url from "../api/spring-boot-api";
import "./Chat.css";

var stompClient = null;
const Chat = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [userData, setUserData] = useState({
    userName: "",
    receiverName: "",
    connected: false,
    message: "",
  });

  const handleUserName = () => {
    let userName = localStorage.getItem("userName");
    // let userName = "Prakash";
    setUserData({ ...userData, userName: userName });
  };

  const registerUser = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient.over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
    userJoin();
  };

  const onPublicMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };

  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.userName,
        message: userData.message,
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.userName,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <div className="container">
      {userData.connected ? (
        <div className="chat-content">
          <ul className="chat-message">
            {publicChats.map((chat, index) => (
              <li
                className={`message ${
                  chat.senderName === userData.userName && "self"
                }`}
                key={index}
              >
                {chat.senderName !== userData.userName && (
                  <div className="avatar">{chat.senderName}</div>
                )}
                <div className="message-data">{chat.message}</div>
                {chat.senderName === userData.userName && (
                  <div className="avatar self">{chat.senderName}</div>
                )}
              </li>
            ))}
          </ul>

          <div className="send-message">
            <input
              type="text"
              className="input-message"
              placeholder="enter the message"
              value={userData.message}
              onChange={handleMessage}
            />
            <button type="button" className="send-button" onClick={sendValue}>
              send
            </button>
          </div>
        </div>
      ) : (
        <div className="register">{handleUserName()}</div>
      )}
    </div>
  );
};

export default Chat;
