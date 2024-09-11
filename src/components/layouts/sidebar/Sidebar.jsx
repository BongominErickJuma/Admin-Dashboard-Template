import React from "react";
import "./sidebar.css";
import SidebarDropdowns from "./SidebarDropdowns";
import dropdown from "./dropdown";

const Sidebar = () => {
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <div className="sidebar-logo d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center logo-container">
            <div className="img-container">
              <img src="./images/logo-crane.png" alt="logo image" />
            </div>
            <h4 className="text-white ms-2">Pomote Uganda</h4>
          </div>
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
