import React from "react";
import "./header.css";
import profileImage from "../../../assets/team-5.jpg";
import Notifications from "./Notifications";
import Profile from "./Profile";

const Header = (props) => {
  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center border-bottom"
      >
        <div className="d-flex align-items-end ">
          <i
            className={`bi bi-list toggle-sidebar-btn `}
            onClick={props.handleToggleSidebar}
          ></i>

          {/* <p className="ms-2">Bongomin Erick Juma |</p>
          <p className="ms-2">cse semester 8 |</p>
          <p className="ms-2 text-info">active.</p> */}
        </div>

        {/* end logo */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-end">
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-question-circle"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>{" "}
              </a>

              <Notifications />
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-end pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-circle"
                />
              </a>

              <Profile />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
