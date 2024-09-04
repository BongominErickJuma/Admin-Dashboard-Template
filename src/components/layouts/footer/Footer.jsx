import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright{" "}
        <strong>
          <span>Cognosphere Dynamics {new Date().getFullYear()}</span>
        </strong>
        . All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;