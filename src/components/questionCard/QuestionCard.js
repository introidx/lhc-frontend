import React from "react";
import "./QuestionCard.css";

const QuestionCard = ({ questions }) => {
  return (
    <div className="one-question-container">
      <h4>{questions.questionTitle}</h4>
      <textarea
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
        name="answer"
        cols="40"
        rows="5"
        placeholder="Type your answer here..."
      ></textarea>
    </div>
  );
};

export default QuestionCard;
