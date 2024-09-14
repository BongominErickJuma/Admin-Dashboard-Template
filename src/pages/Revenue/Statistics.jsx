import React from "react";

const Statistics = () => {
  return (
    <div className="statistics d-flex align-items-center justify-content-between mb-3">
      <div className="stat-item">
        <div class="card info-card revenue-card">
          <div class="card-body">
            <h5 class="card-title">Most Performing Assets</h5>
            <p>Detail about most performing assets</p>
          </div>
        </div>
      </div>
      <div className="stat-item">
        <div class="card info-card revenue-card">
          <div class="card-body">
            <h5 class="card-title">Most Demanded Assets</h5>
            <p>Detail about most Demanded assets</p>
          </div>
        </div>
      </div>
      <div className="stat-item">
        <div class="card info-card revenue-card">
          <div class="card-body">
            <h5 class="card-title">Cash how</h5>
            <p>Detail about cash how</p>
          </div>
        </div>
      </div>
      <div className="stat-item">
        <div class="card info-card revenue-card">
          <div class="card-body">
            <h5 class="card-title">Percentage Revenue</h5>
            <p>Detail about Percentage Revenue</p>
          </div>
        </div>
      </div>
      <div className="stat-item">
        <div class="card info-card revenue-card">
          <div class="card-body">
            <h5 class="card-title">Other Guess</h5>
            <p>Detail about Other Guess</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
