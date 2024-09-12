import React from "react";
import Sidebar from "../../components/layouts/sidebar/Sidebar";

const EndUser = () => {
  return (
    <div>
      <Sidebar />
      <div id="main">
        <h1>Users Management Dashboard</h1>
        <p>
          Manage all user information and settings for different products and
          stakeholders here.
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <h4>Search Users</h4>
          <input type="search" />
        </div>
      </div>
    </div>
  );
};

export default EndUser;
