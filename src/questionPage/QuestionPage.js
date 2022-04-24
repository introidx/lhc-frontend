import React, { useEffect, useState } from "react";
import "./QuestionPage.css";
import Header from "../components/header/Header";
import QuestionCard from "../components/questionCard/QuestionCard";
import axios from "axios";
import base_url from "../api/spring-boot-api";

const QuestionPage = () => {
  // const [questions, setQuestions] = useState([
  //   { questionId: 1001, questionTitle: "ABC DSFHK", questionMarks: "25 Marks" },
  //   { questionId: 1002, questionTitle: "GHIJKL", questionMarks: "20 Marks" },
  // ]);

  const [questions, setQuestions] = useState([]);

  const getAllQuestionsFromServer = () => {
    let testId = localStorage.getItem("testId");
    axios.get(`${base_url}/questions/` + { testId }).then(
      (response) => {
        console.log(response.data);
        setQuestions(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAllQuestionsFromServer();
  }, []);

  const getAllQuestionsFromOneTestId = () => {
    let testId = localStorage.getItem("testId");
    console.log(testId);
    document.documentElement.requestFullscreen();
    axios.get(`${base_url}/questions/${testId}`).then(
      (Response) => {
        console.log(questions);
        setQuestions();
      },
      (error) => {}
    );
  };

  useEffect(() => {
    getAllQuestionsFromOneTestId();
  }, []);

  return (
    <div className="question-page">
      <Header />
      <h3>Topic Test: Database Normalisation</h3>
      {questions.length > 0
        ? questions.map((item) => (
            <QuestionCard key={item.questionId} questions={item} />
          ))
        : "No Questions Found"}

      <button className="btn-submit">Submit</button>
    </div>
  );
};

export default QuestionPage;
