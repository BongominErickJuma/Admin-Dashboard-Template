import React from "react";

const Statistics = () => {
  return (
    <div className="statistics d-flex align-items-center justify-content-between">
      <div className="stat-item">
        <div class="card info-card revenue-card">
          <div class="card-body">
            <h5 class="card-title">Total Actions</h5>

            <div class="d-flex align-items-center">
              <div>
                <h6>12.00</h6>
                <span class="text-success small pt-1 fw-bold bg-success p-2 rounded-5">
                  +8% <i className="bi bi-arrow-up"></i>
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
                <span class="text-danger small pt-1 fw-bold  bg-danger p-2 rounded-5">
                  -12% <i className="bi bi-arrow-down"></i>
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
                <h6>30,000.00</h6>
                <span class="text-danger small pt-1 fw-bold bg-danger p-2 rounded-5">
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
                <h6>243.0</h6>
                <span class="text-success small pt-1 fw-bold bg-success p-2 rounded-5">
                  +25% <i className="bi bi-arrow-up"></i>
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
                <h6>23,000,000</h6>
                <span class="text-success small pt-1 fw-bold bg-success p-2 rounded-5">
                  +10% <i className="bi bi-arrow-up"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
