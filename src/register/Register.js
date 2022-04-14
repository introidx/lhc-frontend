import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/spring-boot-api";
import "./Register.css";

const Register = () => {
  useEffect(() => {
    document.title = "LHC | Register";
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const registerUser = () => {
    let userDetails = { name, email, password, role };
    axios.post(`${base_url}/users/register`, userDetails).then(
      (response) => {
        console.log(response.data);
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
            <h1>Register to LHC</h1>
            <p>
              If you already have a account <br />
              you can SignIn <span>here</span>
            </p>
          </div>
        </div>

        <div className="col-2">
          <button className="btn-register">Register</button>
          <button className="btn-signin">SignIn</button>
          <div class="form-container">
            <form id="LoginForm">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder="Enter Your Name"
              />
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
              <input
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                type="text"
                id="role"
                placeholder="Enter Your Role"
              />
              <button onClick={registerUser()} className="btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
