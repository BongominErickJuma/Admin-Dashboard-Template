import React from "react";
import "./sidebar.css";
import SidebarDropdowns from "./SidebarDropdowns";
import logoImg from "../../../assets/team-3.jpg";
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
        <div className="sidebar-logo mb-2 d-flex-row ps-2 ">
          <a
            href="#"
            className="d-flex align-items-center justify-content-center lg-screen-logo"
          >
            <div className="rounded-circle w-50 me-2">
              <img
                src={logoImg}
                alt="logo image"
                className="w-100 d-block rounded-circle"
              />
            </div>

            <span className="d-lg-block text-white h4">Pomote Uganda</span>
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
