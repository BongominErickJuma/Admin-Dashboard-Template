import React from "react";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import ColumnChart from "../../components/UI/ColumnChart";
import TableStats from "./TableStats";

const Partners = () => {
  return (
    <div>
      <Sidebar />
      <div id="main">
        <h1>Content Creators Dashboard</h1>
        <p>Manage all content creator User information and permission heres</p>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <span className="text-muted fw-bold">Users</span> 6 of 6 total
          </div>
          <div>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Enter Username"
            />
            <button className="btn btn-primary ms-2">Add User</button>
          </div>
        </div>
        <ColumnChart title="Total Content Created" />
        <TableStats />
      </div>
    </div>
  );
};

export default Partners;
