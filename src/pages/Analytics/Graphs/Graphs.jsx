import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./Graphs.css";
import DonutChart from "../../../components/UI/DonutChart";

const Graphs = () => {
  // Column Chart configuration
  const [columnChartOptions] = useState({
    series: [
      {
        data: [44, 55, 57, 56],
      },
      {
        data: [76, 85, 101, 98],
      },
      {
        data: [35, 41, 36, 26],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false, // This hides the toolbar (menu-list icon)
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May"],
    },

    fill: {
      opacity: 1,
    },
    legend: {
      show: false, // This hides the legend (series names)
    },
  });

  // Donut Chart configuration
  const [donutChartOptions] = useState({
    series: [44, 55, 13, 43, 22],
    chart: {
      height: 400,
      type: "donut",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  });

  return (
    <div className="mt-5">
      <div className="card bg-white">
        <div className="card-body row">
          <div className="col-lg-4">
            <h5 className="card-title">All Revenue Contents and craft sales</h5>
            <ReactApexChart
              options={columnChartOptions}
              series={columnChartOptions.series}
              type="bar"
              height={350}
            />
          </div>
          <div className="col-lg-4">
            <h5 className="card-title">Most Active Users By Country</h5>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Active Users</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>United States</td>
                  <td>50000</td>
                </tr>
                <tr>
                  <td>India</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td>Brazil</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>Brazil</td>
                  <td>7000</td>
                </tr>
                <tr>
                  <td>Brazil</td>
                  <td>3000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <div className="donut">
              <DonutChart title="All Reviews from stakeholders" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
