import React from "react";
import "./header.css";
import profileImage from "../../../assets/team-5.jpg";
import Profile from "./Profile";

const Header = () => {
  return (
    <div>
      <header id="header" className="header  d-flex align-items-start">
        {/* end logo */}
        <div className="welcome px-3 py-4">
          <h1>Hello, Admin</h1>
          <p>Welcome to he dashboad</p>
        </div>
        <nav className="header-nav ms-auto px-3 py-4 d-flex flex-column align-items-end justify-content-between h-100">
          <ul className="d-flex align-items-end">
            <li className="nav-item dropdown me-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
                <span class="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </li>

            <li className="nav-item dropdown p-2  rounded bg-white">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  John Doe
                </span>
              </a>

              <Profile />
            </li>
          </ul>
          <button className="btn btn-sm btn-primary rounded-5 px-3 d-flex align-items-center">
            <i className="bi bi-plus fs-4"></i> Add New Event
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
