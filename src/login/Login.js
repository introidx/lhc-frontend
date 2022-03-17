import React from "react";
import "./Login.css";

const Login = () => {
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
              <input type="text" id="email" placeholder="Enter Your Email" />
              <input
                type="text"
                id="password"
                placeholder="Enter Your Password"
              />
              <button className="btn">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
