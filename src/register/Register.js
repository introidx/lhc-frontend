import React from "react";
import "./Register.css";

const Register = () => {
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
              <input type="text" id="name" placeholder="Enter Your Name" />
              <input type="text" id="email" placeholder="Enter Your Email" />
              <input
                type="text"
                id="password"
                placeholder="Enter Your Password"
              />
              <input type="text" id="role" placeholder="Enter Your Role" />
              <button className="btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
