import React from "react";
import ClassCard from "../components/classCard/ClassCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-2">
          <img src={require("./student.png")} width="800px" />
        </div>
        <div className="col-2">
          <h4>Today</h4>
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
