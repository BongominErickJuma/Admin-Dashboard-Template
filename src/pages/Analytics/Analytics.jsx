import React from "react";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import "./Analytics.css";
import Graphs from "./Graphs/Graphs";
import Trends from "./Trends/Trends";

const Analytics = () => {
  return (
    <div>
      <Sidebar />
      <div id="main" className="analytics">
        <h1>Metrics Dashboard</h1>
        <div className="statistics d-flex align-items-center justify-content-between">
          <div className="stat-item">
            <div class="card info-card revenue-card">
              <div class="card-body">
                <h5 class="card-title">Total Actions</h5>

                <div class="d-flex align-items-center">
                  <div>
                    <h6>12.00</h6>
                    <span class="text-success small pt-1 fw-bold">
                      + 8% <i className="bi bi-arrow-up"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div class="card info-card revenue-card">
              <div class="card-body">
                <h5 class="card-title">Average Engagement Time</h5>

                <div class="d-flex align-items-center">
                  <div>
                    <h6>2.00</h6>
                    <span class="text-success small pt-1 fw-bold">
                      -8% <i className="bi bi-arrow-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div class="card info-card revenue-card">
              <div class="card-body">
                <h5 class="card-title">Top Items Converted</h5>

                <div class="d-flex align-items-center">
                  <div>
                    <h6>12.00</h6>
                    <span class="text-success small pt-1 fw-bold">
                      -30% <i className="bi bi-arrow-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div class="card info-card revenue-card">
              <div class="card-body">
                <h5 class="card-title">New Users</h5>

                <div class="d-flex align-items-center">
                  <div>
                    <h6>300000</h6>
                    <span class="text-success small pt-1 fw-bold">
                      + 8% <i className="bi bi-arrow-up"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div class="card info-card revenue-card">
              <div class="card-body">
                <h5 class="card-title">Revenue Generated</h5>

                <div class="d-flex align-items-center">
                  <div>
                    <h6>12.00</h6>
                    <span class="text-success small pt-1 fw-bold">
                      + 8% <i className="bi bi-arrow-up"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Graphs />
        <Trends />
      </div>
    </div>
  );
};

export default Analytics;
