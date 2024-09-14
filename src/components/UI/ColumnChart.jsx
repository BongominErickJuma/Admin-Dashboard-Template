import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart = (props) => {
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
      toolbar: {
        show: false,  // This hides the toolbar (menu-list icon)
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

    fill: {
      opacity: 1,
    },
    legend: {
      show: false, // This hides the legend (series names)
    },
  });

  return (
    <div className="card bg-white mt-3">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <ReactApexChart
          options={columnChartOptions}
          series={columnChartOptions.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default ColumnChart;
