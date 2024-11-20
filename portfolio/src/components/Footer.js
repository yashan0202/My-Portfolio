import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Connect with me</h3>
        <ul className="social-links">
          <li>
            <a
              href="https://www.instagram.com/thermo_dynamics_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thermodynamic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yashan0202"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <p className="footer-text">
          © {new Date().getFullYear()} Yash Anand. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
