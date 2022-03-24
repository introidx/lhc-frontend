import React from "react";
import "./ClassCard.css";

const ClassCard = () => {
  return (
    <div className="card">
      <div className="card-color">
        <div className="card-content">
          <h4>
            <b>CSOE 41</b>
          </h4>
          <h5>Seema Mehla</h5>
        </div>
      </div>
      <div className="container">
        <div className="logo-box">
          <a href="https://www.qries.com/">
            <img src={require("./video-camera.png")} width="50%" />
          </a>
        </div>
        <div className="logo-box">
          <a href="https://www.qries.com/">
            <img src={require("./bubble-chat.png")} width="50%" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
