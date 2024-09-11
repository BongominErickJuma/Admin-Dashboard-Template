import React from "react";

const Profile = () => {
  return (
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
      <li className="dropdown-header">
        <h6>John Doe</h6>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>

      <li>
        <a
          className="dropdown-item d-flex align-items-center"
          href="users-profile.html"
        >
          <i className="bi bi-person"></i>
          <span>My Profile</span>
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>

      <li>
        <a className="dropdown-item d-flex align-items-center" href="#">
          <i className="bi bi-box-arrow-right"></i>
          <span>Sign Out</span>
        </a>
      </li>
    </ul>
  );
};

export default Profile;
