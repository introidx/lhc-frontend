import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
import base_url from "../api/spring-boot-api";
import { UserContext } from "../context/UserContext";

const Login = () => {
  useEffect(() => {
    document.title = "LHC | Login";
  }, []);

  const context = useContext(UserContext);

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
        context.setUser({ email: response.email, name: response.name });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  if (context.user?.email) {
    return <Navigate replace to="/" />;
  }

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
