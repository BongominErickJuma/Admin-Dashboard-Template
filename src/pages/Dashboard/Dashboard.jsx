import React from "react";
import Header from "../../components/layouts/header/Header";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import "./Dashboard.css";
import ColumnChart from "../../components/UI/ColumnChart";
import Calendar from "../../components/UI/Calendar";
import DonutChart from "../../components/UI/DonutChart";
import Statistics from "./Statistics";
import TableStat from "./TableStat";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="min-vh-100 main pt-0" id="main">
        <Statistics />

        <div className="row gx-2 mt-5">
          <div className="col-lg-8">
            <TableStat />
            <ColumnChart title="Customer Overview" />
          </div>

          <div className="col-lg-4">
            <div className="card bg-white text-start">
              <div className="card-body pb-0 ">
                <h3 className="card-title border-bottom">
                  Calendar Event Tracker
                </h3>

                <Calendar />
                <div className="donut">
                  <DonutChart title="All Reviews from Stakeholders" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
