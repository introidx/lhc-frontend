import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import Test from "./test/Test";
import QuestionPage from "./questionPage/QuestionPage";

const App = () => {
  // check if user already exists
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    // if logged in user already exists then change route
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />
        <Route path="/question-page" element={<QuestionPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
