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
import RevenueGrowth from "./RevenueGrowth";
import Statistics from "./Statistics";
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
    labels: [
      "0.0",
      "1.0",
      "2.0",
      "3.0",
      "4.0",
      "5.0",
      "6.0",
      "7.0",
      "8.0",
      "9.0",
      "10.0",
      "11.0",
    ],
    datasets: [
      {
        label: "Line Chart",
        data: [0, 3.0, 5.0, 4.0, 7.0, 8.0, 6.0, 9.0, 10.0, 12.0, 11.0, 15.0],
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
    plugins: {
      legend: {
        display: false, // This hides the legend
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
          <RevenueGrowth />
        </div>
        <Statistics />
      </div>
    </div>
  );
};

export default Revenue;
