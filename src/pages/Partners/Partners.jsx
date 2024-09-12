import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Sidebar from "../../components/layouts/sidebar/Sidebar";

const Partners = () => {
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

  return (
    <div>
      <Sidebar />
      <div id="main">
        <h1>Content Creators Dashboard</h1>
        <p>Manage all content creator User information and permission heres</p>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <span className="text-muted fw-bold">Users</span> 6 of 6 total
          </div>
          <div>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Enter Username"
            />
            <button className="btn btn-primary ms-2">Add User</button>
          </div>
        </div>
        <div className="card bg-white mt-3">
          <div className="card-body">
            <h5 className="card-title">Total Content Created</h5>
            <ReactApexChart
              options={columnChartOptions}
              series={columnChartOptions.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
