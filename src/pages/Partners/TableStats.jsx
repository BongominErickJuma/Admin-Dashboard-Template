import React from "react";

const TableStats = () => {
  return (
    <div className="card bg-white mt-5">
      <div className="card-body">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">Content Manager</th>
              <th scope="col">Content Type</th>
              <th scope="col">Following</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="logo-container">
                      <img
                        src="./images/wakaliwood.jpg"
                        alt="logo-img"
                        className="rounded-circle me-2"
                        width={50}
                      />
                    </div>
                    <div>
                      <h4 className="mb-0">Wakaliwood</h4>
                      <span className="mt-0">John doe</span>
                    </div>
                  </div>
                  <span className="fw-bold text-warning me-3">2311</span>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-danger rounded-4 text-white">
                  Hotel Services
                </button>
              </td>
              <td>following</td>

              <td>
                <a href="#" className="text-muted text-dark">
                  <i className="bi bi-gear fs-6 me-2 "></i>
                  Modify Roles
                </a>
                <a href="#" className="text-muted text-dark ms-2">
                  <i className="bi bi-x fs-5 me-2"></i>Remove
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="logo-container">
                      <img
                        src="./images/hilton_hotel.jpg"
                        alt="logo-img"
                        className="rounded-circle me-2"
                        width={50}
                      />
                    </div>
                    <div>
                      <h4 className="mb-0">Hilton Hotel</h4>
                      <span className="mt-0">John Smith</span>
                    </div>
                  </div>
                  <span className="fw-bold text-warning me-3">3234</span>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-success rounded-4 text-white">
                  crafts
                </button>
              </td>
              <td>inactive</td>

              <td>
                <a href="#" className="text-muted text-dark">
                  <i className="bi bi-gear fs-6 me-2 "></i>
                  Modify Roles
                </a>
                <a href="#" className="text-muted text-dark ms-2">
                  <i className="bi bi-x fs-5 me-2"></i>Remove
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="logo-container">
                      <img
                        src="./images/mtn.jpg"
                        alt="logo-img"
                        className="rounded-circle me-2"
                        width={50}
                      />
                    </div>
                    <div>
                      <h4 className="mb-0">MTN Uganda</h4>
                      <span className="mt-0">John doe</span>
                    </div>
                  </div>
                  <span className="fw-bold text-warning me-3">240</span>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-primary rounded-4 me-2 text-white">
                  Video
                </button>
                <button className="btn btn-sm btn-success rounded-4 text-white">
                  crafts
                </button>
              </td>
              <td>following</td>
              <td>
                <a href="#" className="text-muted text-dark">
                  <i className="bi bi-gear fs-6 me-2 "></i>
                  Modify Roles
                </a>
                <a href="#" className="text-muted text-dark ms-2">
                  <i className="bi bi-x fs-5 me-2"></i>Remove
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="logo-container">
                      <img
                        src="./images/parliament.jpg"
                        alt="logo-img"
                        className="rounded-circle me-2"
                        width={50}
                      />
                    </div>
                    <div>
                      <h4 className="mb-0">Parliament</h4>
                      <span className="mt-0">John doe</span>
                    </div>
                  </div>
                  <span className="fw-bold text-warning me-3">2356</span>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-primary rounded-4 me-2 text-white">
                  Video
                </button>
              </td>
              <td>inactive</td>
              <td>
                <a href="#" className="text-muted text-dark">
                  <i className="bi bi-gear fs-6 me-2 "></i>
                  Modify Roles
                </a>
                <a href="#" className="text-muted text-dark ms-2">
                  <i className="bi bi-x fs-5 me-2"></i>Remove
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="logo-container">
                      <img
                        src="./images/UWA.png"
                        alt="logo-img"
                        className="rounded-circle me-2"
                        width={50}
                      />
                    </div>
                    <div>
                      <h4 className="mb-0">Uganda Wildlife Authority</h4>
                      <span className="mt-0">John doe</span>
                    </div>
                  </div>
                  <span className="fw-bold text-warning me-3">456</span>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-primary rounded-4 me-2 text-white">
                  Video
                </button>
                <button className="btn btn-sm btn-danger rounded-4 me-2 text-white">
                  documents
                </button>
              </td>
              <td>following</td>
              <td>
                <a href="#" className="text-muted text-dark">
                  <i className="bi bi-gear fs-6 me-2 "></i>
                  Modify Roles
                </a>
                <a href="#" className="text-muted text-dark ms-2">
                  <i className="bi bi-x fs-5 me-2"></i>Remove
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="logo-container">
                      <img
                        src="./images/IctHub.jpg"
                        alt="logo-img"
                        className="rounded-circle me-2"
                        width={50}
                      />
                    </div>
                    <div>
                      <h4 className="mb-0">ICT HUB</h4>
                      <span className="mt-0">John doe</span>
                    </div>
                  </div>
                  <span className="fw-bold text-warning me-3">305</span>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-primary rounded-4 me-2 text-white">
                  Video
                </button>
                <button className="btn btn-sm btn-danger rounded-4 me-2 text-white">
                  documents
                </button>
              </td>
              <td>following</td>
              <td>
                <a href="#" className="text-muted text-dark">
                  <i className="bi bi-gear fs-6 me-2 "></i>
                  Modify Roles
                </a>
                <a href="#" className="text-muted text-dark ms-2">
                  <i className="bi bi-x fs-5 me-2"></i>Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableStats;
