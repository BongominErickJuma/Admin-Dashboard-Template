import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
          <img src="./images/logo-no-bg.png" alt="crane logo" />
          <div>
            <h3>Welcome to the Promote Uganda Dashboard!</h3>
            <p>
              You can access & track your services in real-time, Manage content
              subscriptions, and users with ease
            </p>
          </div>
        </div>
        <div className="col-lg-7 min-vh-100 d-flex align-items-center justify-content-center bg-dark">
          <div className="mx-auto login">
            <div className="mx-auto img-container">
              <img
                src="./images/User_Icon.png"
                alt="User Icon"
                className="w-100 d-block"
              />
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                />
              </div>
              <Link to={"/dashboard"} className="btn btn-primary w-100 mt-3">
                Sign In
              </Link>
            </form>

            <div class="d-flex align-items-center justify-content-between mt-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="remember"
                  value="true"
                  id="rememberMe"
                />
                <label class="form-check-label" for="rememberMe">
                  Remember me
                </label>
              </div>

              <div class="form-check">
                <a class="forgot-password text-end" href="#">
                  forgot password
                </a>
              </div>
            </div>
            <hr />
            <p className="text-start">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
