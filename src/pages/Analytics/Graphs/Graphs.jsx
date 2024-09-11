import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./Graphs.css";

const Graphs = () => {
  // Column Chart configuration
  const [columnChartOptions] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
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
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$ ${val} thousands`,
      },
    },
  });

  // Donut Chart configuration
  const [donutChartOptions] = useState({
    series: [44, 55, 13, 43, 22],
    chart: {
      height: 350,
      type: "donut",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  });

  return (
    <div className="row mt-5">
      <div className="col-lg-4">
        <div className="card bg-white">
          <div className="card-body">
            <h5 className="card-title">All Revenue Contents and craft sales</h5>
            <ReactApexChart
              options={columnChartOptions}
              series={columnChartOptions.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card bg-white">
          <div className="card-body">
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
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card  bg-white">
          <div className="card-body">
            <h5 className="card-title">All Reviews from Stakeholders</h5>
            <ReactApexChart
              options={donutChartOptions}
              series={donutChartOptions.series}
              type="donut"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
