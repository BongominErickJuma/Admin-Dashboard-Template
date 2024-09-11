// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/SignUp/SignUp";
import Content from "./pages/Content/Content";
import Analytics from "./pages/Analytics/Analytics";
import EndUser from "./pages/EndUser/EndUser";
import Revenue from "./pages/Revenue/Revenue";
import PromoteTv from "./pages/PromoteTv/PromoteTv";
import Partners from "./pages/Partners/Partners";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/content" element={<Content />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/end-user" element={<EndUser />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/promote-tv" element={<PromoteTv />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
