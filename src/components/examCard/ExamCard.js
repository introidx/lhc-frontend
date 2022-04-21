import React from "react";
import "./ExamCard.css";
import { useNavigate } from "react-router-dom";

const ExamCard = ({ test }) => {
  const navigate = useNavigate();
  // console.log(test);
  const handleOnClick = () => {
    localStorage.setItem("testId", test.testId);
    let testId = localStorage.getItem("testId");
    console.log(testId);
    navigate("question-page");
  };

  return (
    <div className="examcard-container">
      <div
        onClick={() => {
          handleOnClick();
        }}
        className="main-card"
      >
        <div className="left-card">
          <h3>{test.subjectCode}</h3>
          <h4>Test 1</h4>
        </div>
        <div className="right-card">
          <h3>{test.topicName}</h3>
          <div className="container">
            <div className="time-container">
              <div className="time-logo">
                <img src={require("./clock.png")} width="70%" />
              </div>
              <div className="time-text">
                <h5>{test.time}</h5>
              </div>
            </div>
            <div className="marks-container">
              <div className="marks-logo">
                <img src={require("./line-chart.png")} width="70%" />
              </div>
              <div className="marks-text">
                <h5>{test.marks}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
