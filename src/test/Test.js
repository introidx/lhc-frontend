import React, { useEffect, useState } from "react";
import "./Test.css";
import ExamCard from "../components/examCard/ExamCard";
import Header from "../components/header/Header";
import axios from "axios";
import base_url from "../api/spring-boot-api";

const Test = () => {
  // const [test, setTest] = useState([
  //   {
  //     testId: "1",
  //     subjectCode: "CSOE 45",
  //     topicName: "ABC",
  //     time: "1 day Left",
  //     marks: "23 Marks",
  //   },
  //   {
  //     testId: "2",
  //     subjectCode: "CSOE 45",
  //     topicName: "ABC",
  //     time: "1 day Left",
  //     marks: "23 Marks",
  //   },
  // ]);
  const [test, setTest] = useState([]);

  const getAllTestsFromServer = () => {
    axios.get(`${base_url}/tests`).then(
      (response) => {
        console.log(response.data);
        setTest(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAllTestsFromServer();
  }, []);

  return (
    <div className="test">
      <Header />
      <div className="row">
        <div className="col-2">
          {test.length > 0
            ? test.map((item) => <ExamCard key={item.testId} test={item} />)
            : "No Test Found"}
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Test;
