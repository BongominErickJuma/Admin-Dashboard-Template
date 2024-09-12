import React from "react";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Revenue.css";
// Registering chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Revenue = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Line Chart",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Sidebar />
      <div id="main" className="revenue">
        <h1>Revenue and Sales Dashboard</h1>
        <p>A summary of financial performance and asset distribution</p>

        <div className="row my-3">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Overall Revenue Growth</h5>
                <Line
                  data={data}
                  options={options}
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </div>
          </div>
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
        </div>

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
      </div>
    </div>
  );
};

export default Revenue;
