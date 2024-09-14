import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./DonutChart.css";

const DonutChart = (props) => {
  const [donutChartOptions] = useState({
    series: [44, 55, 13, 43, 22],
    chart: {
      height: 350,
      width: 350,
      type: "donut",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
          },
        },
      },
    },
  });

  return (
    <>
      <h3 className="card-title">{props.title}</h3>
      <div className="donut-chart-container">
        <ReactApexChart
          options={donutChartOptions}
          series={donutChartOptions.series}
          type="donut"
          height={350}
          width={350}
        />
      </div>
    </>
  );
};

export default DonutChart;
