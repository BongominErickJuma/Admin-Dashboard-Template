import React from "react";

const RevenueGrowth = () => {
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Revenue Growth By Product</h5>
          <div className="d-flex align-items-center justify-content-between">
            <h4>Videos</h4>
            <h4>50%</h4>
          </div>

          <div className="progress mb-2">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width: "50%",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <h4>Documents</h4>
            <h4>20%</h4>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width: "20%",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <h4>Crafts</h4>
            <h4>80%</h4>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width: "80%",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <h4>Hotel</h4>
            <h4>23%</h4>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width: "23%",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <h4>Services</h4>
            <h4>45%</h4>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width: "45%",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueGrowth;
