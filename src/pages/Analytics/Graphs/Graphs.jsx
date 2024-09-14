import React from "react";

import "./Graphs.css";
import DonutChart from "../../../components/UI/DonutChart";
import VerticalSegmentChart from "../../../components/UI/VerticalSegmentChart";

const Graphs = () => {
  return (
    <div className="mt-5">
      <div className="card bg-white">
        <div className="card-body row">
          <div className="col-lg-4">
            <VerticalSegmentChart
              title="Data for April to July"
              labelType="days"
              labelCount={20}
              startMonth={3}
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
