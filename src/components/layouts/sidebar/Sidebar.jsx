import React from "react";
import "./sidebar.css";
import SidebarDropdowns from "./SidebarDropdowns";
import dropdown from "./dropdown";

const Sidebar = (props) => {
  return (
    <div>
      <aside
        id="sidebar"
        // className={`sidebar ${props.isSidebarHovered ? "sidebar-hovered" : ""}`}
        className={`sidebar ${props.isSidebarHovered ? "sidebar-hovered" : ""}`}
        onMouseOver={props.handleMouseOverSidebar}
        onMouseOut={props.handleMouseOutSidebar}
      >
        <div className="sidebar-logo mb-2 bg-primary d-flex-row ps-2">
          <a
            href="#"
            className="d-flex align-items-center justify-content-center lg-screen-logo"
          >
            <span className="d-lg-block text-white h4">Cognosphere</span>
          </a>
          <a
            href="#"
            className="d-flex align-items-center justify-content-center d-none sm-screen-logo"
          >
            <span className="d-lg-block text-primary fs-6 p-1 rounded-circle border border-primary eclasslink">
              cd
            </span>
          </a>
        </div>
        <ul className="sidebar-nav" id="sidebar-nav">
          {dropdown.map((item, index) => (
            <SidebarDropdowns
              key={index}
              linkTo={item.linkTo}
              icon={item.icon}
              label={item.label}
              chevron={item.chevron}
              children={item.children}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
