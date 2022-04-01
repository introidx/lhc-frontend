import React from "react";
import "./QuestionPage.css";
import Header from "../components/header/Header";

const QuestionPage = () => {
  return (
    <div className="question-page">
      <Header />
      <h3>Topic Test: Database Normalisation</h3>
      <div className="one-question-container">
        <h4>Question 1 : What is Database Normalisation? (10 Marks)</h4>
        <textarea
          name="answer"
          cols="40"
          rows="5"
          placeholder="Type your answer here..."
        ></textarea>
      </div>
      <div className="one-question-container">
        <h4>Question 1 : What is Database Normalisation? (10 Marks)</h4>
        <textarea
          name="answer"
          cols="40"
          rows="5"
          placeholder="Type your answer here..."
        ></textarea>
      </div>
      <div className="one-question-container">
        <h4>Question 1 : What is Database Normalisation? (10 Marks)</h4>
        <textarea
          name="answer"
          cols="40"
          rows="5"
          placeholder="Type your answer here..."
        ></textarea>
      </div>
      <div className="one-question-container">
        <h4>Question 1 : What is Database Normalisation? (10 Marks)</h4>
        <textarea
          name="answer"
          cols="40"
          rows="5"
          placeholder="Type your answer here..."
        ></textarea>
      </div>
      <div className="one-question-container">
        <h4>Question 1 : What is Database Normalisation? (10 Marks)</h4>
        <textarea
          name="answer"
          cols="40"
          rows="5"
          placeholder="Type your answer here..."
        ></textarea>
      </div>
      <button className="btn-submit">Submit</button>
    </div>
  );
};

export default QuestionPage;
