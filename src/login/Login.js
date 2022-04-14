import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import base_url from "../api/spring-boot-api";

const Login = () => {
  useEffect(() => {
    document.title = "LHC | Login";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  if (user) {
    console.log("User Already LoggedIn");
    // redirect to Home
  }

  const loginUser = (e) => {
    let loginDetails = { email, password };

    axios.post(`${base_url}/users/login`, loginDetails).then(
      (response) => {
        console.log(response.data);
        setUser(response.data);
        localStorage.setItem("user", response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="page">
      <div className="row">
        <div className="col-2">
          <div className="text-container">
            <h1>Sign In to LHC</h1>
            <p>
              If you don't have a account <br />
              you can register <span>here</span>
            </p>
          </div>
        </div>

        <div className="col-2">
          <button className="btn-register">Register</button>
          <button className="btn-signin">SignIn</button>
          <div class="form-container">
            <form id="LoginForm">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                id="email"
                placeholder="Enter Your Email"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
                id="password"
                placeholder="Enter Your Password"
              />
              <button onClick={loginUser()} className="btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
