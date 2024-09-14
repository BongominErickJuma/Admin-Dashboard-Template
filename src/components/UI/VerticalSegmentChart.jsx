import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

// Function to generate random values for segments
const generateRandomSegments = () => {
  const blue = Math.floor(Math.random() * 50) + 1; // Random value between 1 and 50
  const red = Math.floor(Math.random() * (100 - blue)) + 1; // Random value such that blue + red <= 100
  const green = 100 - blue - red; // Ensure the total equals 100
  return [blue, red, green];
};

// Function to generate labels based on type, count, and optional start and end
const generateLabels = (type, count, startMonth = 0) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (type === "days") {
    return Array.from({ length: count }, (_, i) => (i + 1).toString());
  }
  if (type === "months") {
    return months.slice(startMonth, startMonth + count); // Slice the array based on startMonth and count
  }
  return [];
};

// Generate data for all labels
const generateChartData = (labelType, labelCount, startMonth) => {
  const labels = generateLabels(labelType, labelCount, startMonth);
  const blueData = [];
  const redData = [];
  const greenData = [];

  labels.forEach(() => {
    const [blue, red, green] = generateRandomSegments();
    blueData.push(blue);
    redData.push(red);
    greenData.push(green);
  });

  return {
    labels,
    blueData,
    redData,
    greenData,
  };
};

const VerticalSegmentChart = ({
  title,
  labelType = "days",
  labelCount = 31,
  startMonth = 0,
}) => {
  const { labels, blueData, redData, greenData } = generateChartData(
    labelType,
    labelCount,
    startMonth
  );

  const [columnChartOptions] = useState({
    series: [
      {
        name: "Blue Segment",
        data: blueData,
      },
      {
        name: "Red Segment",
        data: redData,
      },
      {
        name: "Green Segment",
        data: greenData,
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true, // Enable stacking for vertical segments
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false, // Ensure it's a vertical column chart
        columnWidth: "100%", // Ensure no space between bars
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: labels, // Use the generated labels for x-axis categories
      axisBorder: {
        show: false, // Remove x-axis border
      },
      axisTicks: {
        show: false, // Remove x-axis ticks
      },
    },
    yaxis: {
      max: 100, // Set the max value of the y-axis to 100
      axisBorder: {
        show: false, // Remove y-axis border
      },
      axisTicks: {
        show: false, // Remove y-axis ticks
      },
      labels: {
        show: false, // Remove y-axis labels
      },
    },
    grid: {
      show: false, // Remove grid lines
    },
    fill: {
      opacity: 1,
      colors: ["#0000FF", "#FF0000", "#00FF00"], // Blue, Red, Green
    },
    legend: {
      show: false, // Hide legend if not needed
    },
  });

  return (
    <>
      <h5 className="card-title">{title}</h5>
      <ReactApexChart
        options={columnChartOptions}
        series={columnChartOptions.series}
        type="bar"
        height={350}
      />
    </>
  );
};

export default VerticalSegmentChart;
