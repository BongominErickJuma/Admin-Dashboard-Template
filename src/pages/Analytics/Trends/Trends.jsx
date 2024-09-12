import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";
import "./Trends.css";

const Trends = () => {
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const series = {
      monthDataSeries1: {
        prices: [
          8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
          8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9,
          8496.25, 8600.65, 8881.1, 9340.85,
        ],
        dates: [
          "13 Nov 2017",
          "14 Nov 2017",
          "15 Nov 2017",
          "16 Nov 2017",
          "17 Nov 2017",
          "20 Nov 2017",
          "21 Nov 2017",
          "22 Nov 2017",
          "23 Nov 2017",
          "24 Nov 2017",
          "27 Nov 2017",
          "28 Nov 2017",
          "29 Nov 2017",
          "30 Nov 2017",
          "01 Dec 2017",
          "04 Dec 2017",
          "05 Dec 2017",
          "06 Dec 2017",
          "07 Dec 2017",
          "08 Dec 2017",
        ],
      },
    };

    setSeriesData(series.monthDataSeries1);
  }, []);

  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "straight" },
    subtitle: {
      text: "Price Movements",
      align: "left",
    },
    xaxis: {
      type: "datetime",
      categories: seriesData.dates,
    },
    yaxis: { opposite: true },
    legend: { horizontalAlign: "left" },
  };

  const series = [{ name: "STOCK ABC", data: seriesData.prices }];

  return (
    <div className="row mt-5">
      <div className="col-lg-7">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Current Trends</h5>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Stakeholders</th>
                  <th scope="col">Month 1</th>
                  <th scope="col">Month 2</th>
                  <th scope="col">Change (%)</th>
                  <th scope="col">Graph</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="card bg-white">
          <div className="card-body">
            <h5 className="card-title">Growth Trend</h5>
            <ApexCharts
              options={options}
              series={series}
              type="area"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
