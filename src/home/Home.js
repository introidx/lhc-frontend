import React, { useState } from "react";
import ClassCard from "../components/classCard/ClassCard";
import Header from "../components/header/Header";
import "./Home.css";

const Home = () => {
  const [course, setCourse] = useState([
    { courseId: "ECPE80", teacherName: "Shelly Sharma", bgColor: "#0277BD" },
    { courseId: "ECPE83", teacherName: "Rajendra Kumar", bgColor: "#009788" },
    { courseId: "ECPE87", teacherName: "Shelza Dua", bgColor: "#32AC71" },
    { courseId: "CSOE40", teacherName: "Seema Mehla", bgColor: "#FFC901" },
    { courseId: "CSOE40", teacherName: "Seema Mehla", bgColor: "#FFC901" },
  ]);

  return (
    <div className="home">
      <Header />
      <div className="row">
        <div className="col-2">
          <img src={require("./student.png")} width="700px" />
        </div>
        <div className="col-2">
          <h3 style={{ Color: "#000000" }}>
            <b>Today</b>
          </h3>

          <div className="col-4">
            <ClassCard course={course[0]} />
          </div>
          <div className="col-4">
            <ClassCard course={course[1]} />
          </div>
          <div className="col-4">
            <ClassCard course={course[2]} />
          </div>
          <div className="col-4">
            <ClassCard course={course[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
