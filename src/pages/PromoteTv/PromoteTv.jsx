import React from "react";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import "./PromoteTv.css";

const PromoteTv = () => {
  return (
    <div>
      <Sidebar />
      <div id="main" className="promote">
        <h1>Promote Tv Content Pannel</h1>
        <p>Explore our latest and popular content</p>
        <div className="card">
          <div className="card-body">
            <ul
              className="nav nav-tabs nav-tabs-bordered"
              id="borderedTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Videos
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Audience
                </button>
              </li>
            </ul>
            <div className="tab-content pt-2" id="borderedTabContent">
              <div
                className="tab-pane fade show active"
                id="bordered-home"
                role="tabpanel"
                aria-labelledby="home-tab"
              ></div>
              <div
                className="tab-pane fade"
                id="bordered-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              ></div>
              <div
                className="tab-pane fade"
                id="bordered-contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoteTv;
