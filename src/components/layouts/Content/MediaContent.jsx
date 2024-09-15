import React from "react";

const MediaContent = () => {
  return (
    <div className="media-album pb-5 bg-light">
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          class="card mx-2 text-start mb-2 shadow-none bg-transparent border"
          key={index}
          style={{
            width: "18.3%",
            display: "inline-block",
          }}
        >
          <div className="bg-dark">
            <div className="w-25 mx-auto " style={{}}>
              <img
                src="/images/logo-crane.png"
                class="card-img-top d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="p-2 pb-5">
            <small>
              <b>video title {index} that span across 2 rows instead</b>
            </small>

            <div>
              <small
                className="text-muted"
                style={{
                  fontSize: "12px",
                }}
              >
                889 views
              </small>
              <small
                className="ms-2 text-muted"
                style={{
                  fontSize: "12px",
                }}
              >
                2 weeks Ago
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaContent;
