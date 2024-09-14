import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const SmoothLineChart = (props) => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Thread-like Line",
        data: props.array,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4, // Controls the smoothness of the line
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // Hides the X-axis
      },
      y: {
        display: false, // Hides the Y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Optionally hide the legend if needed
      },
    },
    elements: {
      point: {
        radius: 0, // Hides the points on the line
      },
    },
  };

  return (
    <div style={{ height: "0.8rem" }}>
      {/* Set the container height */}
      <Line data={data} options={options} height={60} />{" "}
      {/* Adjust the height here */}
    </div>
  );
};

export default SmoothLineChart;
