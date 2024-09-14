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
  );
};

export default TableStat;
