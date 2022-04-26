import React from "react";
import "./ClassCard.css";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ course }) => {
  const navigate = useNavigate();
  // const handleOnClick = () => {
  //   navigate("video");
  // };
  return (
    <div className="card">
      <div style={{ backgroundColor: course.bgColor }} className="card-color">
        <div className="card-content">
          <h4>
            <b>{course.courseId}</b>
          </h4>
          <h5>{course.teacherName}</h5>
        </div>
      </div>
      <div className="container">
        <div className="logo-box">
          <a href="http://localhost:3000/video">
            <img src={require("./video-camera.png")} width="50%" />
          </a>
        </div>
        <div className="logo-box">
          <a href="http://localhost:3000/chat">
            <img src={require("./bubble-chat.png")} width="50%" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
