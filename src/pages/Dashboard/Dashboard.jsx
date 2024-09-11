import React, { useEffect } from "react";
import Header from "../../components/layouts/header/Header";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import * as echarts from "echarts";
import "./Dashboard.css";

const Dashboard = () => {
  // Initialize charts
  useEffect(() => {
    // Initialize traffic chart
    const trafficChartEl = document.querySelector("#trafficChart");
    if (trafficChartEl) {
      const trafficChart = echarts.init(trafficChartEl);
      trafficChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="min-vh-100 main pt-0" id="main">
        <div className="statistics d-flex align-items-center justify-content-between">
          <div className="stat-item">
            <div className="card info-card sales-card">
              <div className="filter">
                <span>Weekly</span>
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots-vertical"></i>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Annual
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  <div className="card-icon rounded-3 d-flex align-items-center justify-content-center">
                    <i className="bi bi-person-fill"></i>
                  </div>
                </h5>

                <div className="d-flex align-items-center justify-content-start borser">
                  <div className="w-100">
                    <div>
                      <b>User Grw...</b>
                      graph
                    </div>
                    <div className="progress mt-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text-muted small">1328</span>
                      <span className="text-muted small ms-auto">+ %20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="card info-card sales-card">
              <div className="filter">
                <span>Weekly</span>
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots-vertical"></i>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Annual
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  <div className="card-icon rounded-3 d-flex align-items-center justify-content-center">
                    <i className="bi bi-chat-dots"></i>
                  </div>
                </h5>

                <div className="d-flex align-items-center justify-content-start borser">
                  <div className="w-100">
                    <div>
                      <b>User Grw...</b>
                      graph
                    </div>
                    <div className="progress mt-3">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{
                          width: "50%",
                        }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text-muted small">1328</span>
                      <span className="text-muted small ms-auto">+ %5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="card info-card sales-card">
              <div className="filter">
                <span>Weekly</span>
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots-vertical"></i>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Annual
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  <div className="card-icon rounded-3 d-flex align-items-center justify-content-center">
                    <i className="bi bi-chat-square"></i>
                  </div>
                </h5>

                <div className="d-flex align-items-center justify-content-start borser">
                  <div className="w-100">
                    <div>
                      <b>User Grw...</b>
                      graph
                    </div>
                    <div className="progress mt-3">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{
                          width: "10%",
                        }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text-muted small">1328</span>
                      <span className="text-muted small ms-auto">+ %8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="card info-card sales-card">
              <div className="filter">
                <span>Weekly</span>
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots-vertical"></i>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Annual
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  <div className="card-icon rounded-3 d-flex align-items-center justify-content-center">
                    <i className="bi bi-heart-fill"></i>
                  </div>
                </h5>

                <div className="d-flex align-items-center justify-content-start borser">
                  <div className="w-100">
                    <div>
                      <b>User Grw...</b>
                      graph
                    </div>
                    <div className="progress mt-3">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text-muted small">1328</span>
                      <span className="text-muted small ms-auto">+ %20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="card info-card sales-card">
              <div className="filter">
                <span>Weekly</span>
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots-vertical"></i>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Annual
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  <div className="card-icon rounded-3 d-flex align-items-center justify-content-center">
                    <i className="bi bi-bell-fill text-sucess"></i>
                  </div>
                </h5>

                <div className="d-flex align-items-center justify-content-start borser">
                  <div className="w-100">
                    <div>
                      <b>User Grw...</b>
                      graph
                    </div>
                    <div className="progress mt-3">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text-muted small">1328</span>
                      <span className="text-muted small ms-auto">+ %20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gx-2 mt-5">
          <div className="col-lg-9">
            <div className="card bg-white">
              <div className="card-body">
                <h3 className="border-bottom">Recent Subscriptions</h3>

                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Username</th>
                      <th scope="col">status</th>
                      <th scope="col">Email</th>
                      <th scope="col">Joined on</th>
                      <th scope="col">Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Brandon Jacob</td>
                      <td>
                        <button className="btn btn-sm btn-warning text-white">
                          premium
                        </button>
                      </td>
                      <td>email@example.com</td>
                      <td>2016-05-25</td>
                      <td>
                        <a href="#" className="text-success">
                          view
                        </a>
                        <a href="#" className="text-danger ms-2">
                          delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Bridie Kessler</td>
                      <td>
                        <button className="btn btn-sm btn-info text-white">
                          standard
                        </button>
                      </td>
                      <td>email@example.com</td>
                      <td>2014-12-05</td>
                      <td>
                        <a href="#" className="text-success">
                          view
                        </a>
                        <a href="#" className="text-danger ms-2">
                          delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Ashleigh Langosh</td>
                      <td>
                        <button className="btn btn-sm btn-info text-white">
                          standard
                        </button>
                      </td>
                      <td>email@example.com</td>
                      <td>2011-08-12</td>
                      <td>
                        <a href="#" className="text-success">
                          view
                        </a>
                        <a href="#" className="text-danger ms-2">
                          delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Angus Grady</td>
                      <td>
                        <button className="btn btn-sm btn-warning text-white">
                          premium
                        </button>
                      </td>
                      <td>email@example.com</td>
                      <td>2012-06-11</td>
                      <td>
                        <a href="#" className="text-success">
                          view
                        </a>
                        <a href="#" className="text-danger ms-2">
                          delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Raheem Lehner</td>
                      <td>
                        <button className="btn btn-sm btn-warning text-white">
                          premium
                        </button>
                      </td>
                      <td>email@example.com</td>
                      <td>2011-04-19</td>
                      <td>
                        <a href="#" className="text-success">
                          view
                        </a>
                        <a href="#" className="text-danger ms-2">
                          delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card bg-white">
              <div className="card-body pb-0">
                <h3 className="card-title border-bottom">
                  All Reviews From Stakeholders
                </h3>
                <div
                  id="trafficChart"
                  style={{ minHeight: "400px" }}
                  className="echart"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
