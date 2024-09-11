import React from "react";
import "./Content.css";
import Sidebar from "../../components/layouts/sidebar/Sidebar";

const Content = () => {
  return (
    <div>
      <Sidebar />
      <div id="main">
        <div className="content-header">
          <h1>Content Management Panel</h1>
          <p>
            Manage all contents from different content creators right here
            including services and products.
          </p>
          <div className="row">
            <div className="col-lg-5">
              <div className="row">
                <div className="col-md-6">
                  <select
                    className="form-select form-select-lg mb-3 custom-select"
                    aria-label=".form-select-lg example"
                  >
                    <option selected>sort by</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select form-select-lg mb-3 custom-select"
                    aria-label=".form-select-lg example"
                  >
                    <option selected>items per page</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-8">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <button className="btn btn-sm btn-primary rounded py-0 px-3 d-flex align-items-center">
                    <i className="bi bi-plus fs-4"></i> Add New Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-navbar text-center text-danger row">
          <div className="col-lg-3 navbar-item">
            <i className="bi bi-camera-reels"></i>
            <h6>Media Content</h6>
          </div>
          <div className="col-lg-3 navbar-item">
            <i className="bi bi-gift"></i>
            <h6>Products</h6>
          </div>
          <div className="col-lg-3 navbar-item">
            <i className="bi bi-layout-text-window-reverse"></i>
            <h6>Investments</h6>
          </div>
          <div className="col-lg-3 navbar-item">
            <i className="bi bi-award fs-6"></i>
            <h6>Attractions</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
