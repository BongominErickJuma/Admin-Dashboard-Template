import React from "react";
import "./Content.css";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import MediaContent from "../../components/layouts/Content/MediaContent";
import Products from "../../components/layouts/Content/Products";
import Investment from "../../components/layouts/Content/Investment";
import Atraction from "../../components/layouts/Content/Atraction";

const Content = () => {
  return (
    <div>
      <Sidebar />
      <div id="main" className="content">
        <div className="content-header fixed-top">
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
          <div className="content-navbar text-center text-danger row">
            <ul
              className="nav nav-tabs nav-tabs-bordered row"
              id="borderedTab"
              role="tablist"
            >
              <li className="nav-item col-lg-3" role="presentation">
                <button
                  className="nav-link active w-100 border-0 text-danger"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <i className="bi bi-camera-reels"></i>
                  <h6>Media Content</h6>
                </button>
              </li>
              <li className="nav-item col-lg-3" role="presentation">
                <button
                  className="nav-link w-100 border-0 text-danger"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <i className="bi bi-gift"></i>
                  <h6>Products</h6>
                </button>
              </li>
              <li className="nav-item  col-lg-3" role="presentation">
                <button
                  className="nav-link w-100 border-0 text-danger"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  <i className="bi bi-layout-text-window-reverse"></i>
                  <h6>Investments</h6>
                </button>
              </li>
              <li className="nav-item col-lg-3" role="presentation">
                <button
                  className="nav-link w-100 border-0 text-danger"
                  id="attraction-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-attraction"
                  type="button"
                  role="tab"
                  aria-controls="attraction"
                  aria-selected="false"
                >
                  <i className="bi bi-award fs-6"></i>
                  <h6>Attractions</h6>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab-content pt-2" id="borderedTabContent">
          <div
            className="tab-pane fade show active"
            id="bordered-home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <MediaContent />
          </div>
          <div
            className="tab-pane fade"
            id="bordered-profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Products />
          </div>
          <div
            className="tab-pane fade"
            id="bordered-contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <Investment />
          </div>
          <div
            className="tab-pane fade"
            id="bordered-attraction"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <Atraction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
