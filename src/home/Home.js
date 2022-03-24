import React from "react";
import ClassCard from "../components/classCard/ClassCard";
import Header from "../components/header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="row">
        <div className="col-2">
          <img src={require("./student.png")} width="700px" />
        </div>
        <div className="col-2">
          <h3>
            <b>Today</b>
          </h3>
          <div className="col-4">
            <ClassCard />
          </div>
          <div className="col-4">
            <ClassCard />
          </div>
          <div className="col-4">
            <ClassCard />
          </div>
          <div className="col-4">
            <ClassCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
