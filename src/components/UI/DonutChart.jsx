import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = (props) => {
  const [donutChartOptions] = useState({
    series: [44, 55, 13, 43, 22],
    chart: {
      height: 350, // Adjust the height here
      width: 350, // Add width property here
      type: "donut",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  });

  return (
    <>
      <h5 className="card-title">{props.title}</h5>
      <ReactApexChart
        options={donutChartOptions}
        series={donutChartOptions.series}
        type="donut"
        height={350} // Set height here
        width={350} // Set width here
      />
    </>
  );
};

export default DonutChart;
