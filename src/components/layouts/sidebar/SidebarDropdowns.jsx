import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarDropdowns = ({ linkTo, icon, label, chevron, children }) => {
  const [isOpen, setIsOpen] = useState(() => {
    const savedState = localStorage.getItem(`${label}-isOpen`);
    return savedState ? JSON.parse(savedState) : false;
  });

  const toggleDropdown = (e) => {
    if (linkTo === "#") {
      e.preventDefault(); // Prevent navigation if the link is a placeholder
      const newState = !isOpen;
      setIsOpen(newState);
      localStorage.setItem(`${label}-isOpen`, JSON.stringify(newState));
    }
  };

  useEffect(() => {
    const savedState = localStorage.getItem(`${label}-isOpen`);
    if (savedState) {
      setIsOpen(JSON.parse(savedState));
    }
  }, [label]);

  return (
    <li className={`nav-item ${isOpen ? "open" : ""}`}>
      <NavLink
        to={linkTo === "#" ? "#" : linkTo}
        className="nav-link"
        onClick={toggleDropdown}
        activeclassname="active"
      >
        <div className="d-flex align-items-center">
          <i className={icon}></i>
          <span>{label}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default SidebarDropdowns;
