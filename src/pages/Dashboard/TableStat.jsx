import React from "react";

const TableStat = () => {
  return (
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
              <td>
                <span className="px-2 py-1 text-white fw-bold my-2 rounded me-2 bg-warning">
                  B
                </span>
                Bonny Tom
              </td>
              <td>
                <button className="btn btn-sm btn-warning text-white">
                  premium
                </button>
              </td>
              <td>em***@google.com</td>
              <td
                style={{
                  fontSize: "14px",
                  verticalAlign: "middle",
                }}
              >
                2016-05-25
              </td>
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
              <td>
                <span className="px-2 py-1 text-white fw-bold my-2 rounded me-2 bg-info">
                  F
                </span>
                F*** B**
              </td>
              <td>
                <button className="btn btn-sm btn-info text-white">
                  standard
                </button>
              </td>
              <td>em***@google.com</td>
              <td
                style={{
                  fontSize: "14px",
                  verticalAlign: "middle",
                }}
              >
                2014-12-05
              </td>
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
              <td>
                <span className="px-2 py-1 text-white fw-bold my-2 rounded me-2 bg-danger">
                  K
                </span>
                K*** S**
              </td>
              <td>
                <button className="btn btn-sm btn-info text-white">
                  standard
                </button>
              </td>
              <td>em***@google.com</td>
              <td
                style={{
                  fontSize: "14px",
                  verticalAlign: "middle",
                }}
              >
                2011-08-12
              </td>
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
              <td>
                <span className="px-2 py-1 text-white fw-bold my-2 rounded me-2 bg-success">
                  E
                </span>
                E*** J**
              </td>
              <td>
                <button className="btn btn-sm btn-warning text-white">
                  premium
                </button>
              </td>
              <td>em***@google.com</td>
              <td
                style={{
                  fontSize: "14px",
                  verticalAlign: "middle",
                }}
              >
                2012-06-11
              </td>
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
              <td>
                <span className="px-2 py-1 text-white fw-bold my-2 rounded me-2 bg-primary">
                  R
                </span>
                R*** S**
              </td>
              <td>
                <button className="btn btn-sm btn-warning text-white">
                  premium
                </button>
              </td>
              <td>em***@google.com</td>
              <td
                style={{
                  fontSize: "14px",
                  verticalAlign: "middle",
                }}
              >
                2011-04-19
              </td>
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
  );
};

export default TableStat;
