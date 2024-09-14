import React from "react";
import SmoothLineChart from "../../components/UI/SmoothLineChart";

// Function to shuffle an array
const shuffleArray = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// Create an array from 0 to 80
const createArrayFrom0To80 = () => {
  return Array.from({ length: 81 }, (_, i) => i);
};

const Statistics = () => {
  const shuffledArray = shuffleArray(createArrayFrom0To80());

  return (
    <div className="statistics d-flex align-items-center justify-content-between">
      <div className="stat-item">
        <div className="card info-card sales-card">
          <div className="filter">
            <span>Weekly</span>
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots-vertical"></i>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li>
                <a className="dropdown-item" href="#">
                  Weekly
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Monthly
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Annual
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              <div className="card-icon rounded-3 d-flex align-items-center justify-content-center text-primary">
                <i className="bi bi-person-fill"></i>
              </div>
            </h5>

            <div className="d-flex align-items-center justify-content-start borser">
              <div className="w-100">
                <div className="stat-graph">
                  <b className="truncated" data-full-text="User Growth">
                    User Growth
                  </b>
                  <SmoothLineChart
                    array={shuffledArray.slice(0, 12)} // Show only the first 12 values
                  />
                </div>
                <div className="progress mt-3">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{
                      width: "20%",
                    }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="text-muted small">1328</span>
                  <span className="text-muted small ms-auto">+ %20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repeat similar structure for other cards */}

      <div className="stat-item">
        <div className="card info-card sales-card">
          <div className="filter">
            <span>Weekly</span>
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots-vertical"></i>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li>
                <a className="dropdown-item" href="#">
                  Weekly
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Monthly
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Annual
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              <div className="card-icon rounded-3 d-flex align-items-center justify-content-center text-warning">
                <i className="bi bi-chat-dots"></i>
              </div>
            </h5>

            <div className="d-flex align-items-center justify-content-start">
              <div className="w-100">
                <div className="stat-graph">
                  <b className="truncated" data-full-text="Engagement matrics">
                    Engagement matrics
                  </b>
                  <SmoothLineChart
                    array={shuffledArray.slice(0, 12)} // Show only the first 12 values
                  />
                </div>
                <div className="progress mt-3">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{
                      width: "50%",
                    }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="text-muted small">1328</span>
                  <span className="text-muted small ms-auto">+ %5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stat-item">
        <div className="card info-card sales-card">
          <div className="filter">
            <span>Weekly</span>
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots-vertical"></i>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li>
                <a className="dropdown-item" href="#">
                  Weekly
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Monthly
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Annual
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              <div className="card-icon rounded-3 d-flex align-items-center justify-content-center text-info">
                <i className="bi bi-chat-square"></i>
              </div>
            </h5>

            <div className="d-flex align-items-center justify-content-start borser">
              <div className="w-100">
                <div className="stat-graph">
                  <b
                    className="truncated"
                    data-full-text="Booking and conversion rate"
                  >
                    Booking and conversion rate
                  </b>
                  <SmoothLineChart
                    array={shuffledArray.slice(0, 12)} // Show only the first 12 values
                  />
                </div>
                <div className="progress mt-3">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{
                      width: "10%",
                    }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="text-muted small">1328</span>
                  <span className="text-muted small ms-auto">+ %8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stat-item">
        <div className="card info-card sales-card">
          <div className="filter">
            <span>Weekly</span>
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots-vertical"></i>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li>
                <a className="dropdown-item" href="#">
                  Weekly
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Monthly
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Annual
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              <div className="card-icon rounded-3 d-flex align-items-center justify-content-center text-danger">
                <i className="bi bi-heart-fill"></i>
              </div>
            </h5>

            <div className="d-flex align-items-center justify-content-start borser">
              <div className="w-100">
                <div className="stat-graph">
                  <b
                    className="truncated"
                    data-full-text="Content engagement rate"
                  >
                    Content engagement rate
                  </b>
                  <SmoothLineChart
                    array={shuffledArray.slice(0, 12)} // Show only the first 12 values
                  />
                </div>
                <div className="progress mt-3">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{
                      width: "20%",
                    }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="text-muted small">1328</span>
                  <span className="text-muted small ms-auto">+ %20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stat-item">
        <div className="card info-card sales-card">
          <div className="filter">
            <span>Weekly</span>
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots-vertical"></i>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li>
                <a className="dropdown-item" href="#">
                  Weekly
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Monthly
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Annual
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              <div className="card-icon rounded-3 d-flex align-items-center justify-content-center text-success">
                <i className="bi bi-bell-fill "></i>
              </div>
            </h5>

            <div className="d-flex align-items-center justify-content-start borser">
              <div className="w-100">
                <div className="stat-graph">
                  <b
                    className="truncated"
                    data-full-text="Booking and conversion rate"
                  >
                    Booking and conversion rate
                  </b>
                  <SmoothLineChart
                    array={shuffledArray.slice(0, 12)} // Show only the first 12 values
                  />
                </div>
                <div className="progress mt-3">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{
                      width: "20%",
                    }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="text-muted small">1328</span>
                  <span className="text-muted small ms-auto">+ %20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
