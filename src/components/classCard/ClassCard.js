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
          <img src={require("./video-camera.png")} width="50%" />
        </div>
        <div className="logo-box">
          <img src={require("./video-camera.png")} width="50%" />
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
