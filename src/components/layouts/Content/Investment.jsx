// Import necessary dependencies
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Investment = () => {
  // Data for the chart
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
        data: [65, 59, 80, 81, 56, 55, 40, 45, 50, 60, 70, 75], // You can adjust these values
        backgroundColor: "rgba(48,48,48,0.5)", // Bar color
        borderColor: "rgba(48,48,48,0.5)", // Border color
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Audience Size Trend",
        font: {
          size: 18,
        },
        align: "start", // Align title to the left
      },
      legend: {
        display: false, // Hide the legend (label)
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
      },
      y: {
        grid: {
          display: false, // Remove horizontal grid lines
        },
        ticks: {
          display: false, // Hide y-axis values (bar values on the left)
        },
        beginAtZero: true, // Ensure the y-axis starts at zero
      },
    },
  };

  return (
    <div className="investment-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Investment;
