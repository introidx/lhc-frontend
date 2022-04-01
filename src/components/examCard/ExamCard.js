import React from "react";
import "./ExamCard.css";

const ExamCard = () => {
  return (
    <div className="main-card">
      <div className="left-card">
        <h3>CSOE 41</h3>
        <h4>Test 1</h4>
      </div>
      <div className="right-card">
        <h3>Database Normalisation</h3>
        <div className="container">
          <div className="time-container">
            <div className="time-logo">
              <img src={require("./clock.png")} width="70%" />
            </div>
            <div className="time-text">
              <h5>2 Days Left</h5>
            </div>
          </div>
          <div className="marks-container">
            <div className="marks-logo">
              <img src={require("./line-chart.png")} width="70%" />
            </div>
            <div className="marks-text">
              <h5>25 Marks</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
