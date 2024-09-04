// App.jsx
import React, { useState } from "react";
import Header from "./components/layouts/header/Header";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import Footer from "./components/layouts/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
    if (!isSidebarToggled) {
      setIsSidebarHovered(false);
    }
  };

  const handleMouseOverSidebar = () => {
    if (isSidebarToggled) {
      setIsSidebarHovered(true);
    }
  };

  const handleMouseOutSidebar = () => {
    if (isSidebarToggled) {
      setIsSidebarHovered(false);
    }
  };

  return (
    <Router>
      <div
        className={`${
          isSidebarToggled && !isSidebarHovered ? "toggle-sidebar" : ""
        } ${isSidebarHovered ? "hover-sidebar" : ""}`}
      >
        <Header handleToggleSidebar={handleToggleSidebar} />
        <Sidebar
          handleMouseOverSidebar={handleMouseOverSidebar}
          handleMouseOutSidebar={handleMouseOutSidebar}
          isSidebarHovered={isSidebarHovered}
        />
        <div className="min-vh-100 main" id="main">
          <Routes>
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
