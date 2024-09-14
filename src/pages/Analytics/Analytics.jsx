import React from "react";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import "./Analytics.css";
import Graphs from "./Graphs/Graphs";
import Trends from "./Trends/Trends";
import Statistics from "./Statistics";

const Analytics = () => {
  return (
    <div>
      <Sidebar />
      <div id="main" className="analytics">
        <h1>Metrics Dashboard</h1>
        <select
          className="form-select form-select-lg mb-3 months w-25"
          aria-label=".form-select-lg example"
        >
          <option selected>Past Month</option>
          <option>Past Month</option>
          <option value="1">Past 4 Months</option>
          <option value="2">past half Year</option>
          <option value="3">Past Year</option>
        </select>
        <div className="d-flex align-items-start">
          <h2>Activities Summary</h2>
          <div className="d-flex align-items-start justify-content-between ms-3">
            <i className="bi bi-people fs-3"></i>
            <select
              className="form-select form-select-lg mb-3  stakeholders"
              aria-label=".form-select-lg example"
            >
              <option selected>All stakeholders</option>
              <option>All stakeholders</option>
              <option>Hotel</option>
              <option value="1">Restaurant</option>
              <option value="2">Craft shops</option>
              <option value="3">Content Creators</option>
            </select>
          </div>
        </div>
        <Statistics />
        <Graphs />
        <Trends />
      </div>
    </div>
  );
};

export default Analytics;
