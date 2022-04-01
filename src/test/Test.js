import React from "react";
import "./Test.css";
import ExamCard from "../components/examCard/ExamCard";
import Header from "../components/header/Header";

const Test = () => {
  return (
    <div className="test">
      <Header />
      <div className="row">
        <div className="col-2">
          <div className="examcard-container">
            <ExamCard />
          </div>
          <div className="examcard-container">
            <ExamCard />
          </div>
          <div className="examcard-container">
            <ExamCard />
          </div>
          <div className="examcard-container">
            <ExamCard />
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Test;
