import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light-mode" : "dark-mode";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">My Portfolio</div>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#landing" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#certifications-more" onClick={() => setMenuOpen(false)}>Certifications & More</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className="dark-mode-toggle" onClick = {toggleDarkMode}>
      <div className={`toggle-switch ${isDarkMode ? "dark" : "light"}`}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} 
        className="dark-mode-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
