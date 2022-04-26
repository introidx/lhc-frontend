import React, { useState, useEffect } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import base_url from "../api/spring-boot-api";
import "./Chat.css";
import Header from "../components/header/Header";

var stompClient = null;
const Chat = () => {
  // console.log("Chat Componen loded");
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [userData, setUserData] = useState({
    userName: "",
    receiverName: "",
    connected: false,
    message: "",
  });
  // console.log(userData.connected);

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  const handleUsername = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setUserData({ ...userData, userName: value });
  };

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/api");
    stompClient = over(Sock);

    stompClient.connect({}, onConnected, onError);
  };

  const registerUser = () => {
    connect();
  };

  const onConnected = () => {
    console.log("OnConnected Called");
    setUserData({ ...userData, connected: true });
    stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.userName,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onPublicMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        console.log("Joined");
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

  const onError = (err) => {
    console.log(err);
  };

  return (
    <div className="container">
      <Header />
      {userData.connected ? (
        <div className="chat-content">
          <ul className="chat-messages">
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
        <div className="register">
          <input
            id="user-name"
            placeholder="Enter your name"
            name="userName"
            value={userData.username}
            onChange={handleUsername}
            margin="normal"
          />
          <button type="button" onClick={registerUser}>
            connect
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
