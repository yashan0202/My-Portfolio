import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${showHeader ? "visible" : "hidden"}`}>
      <nav>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <Link to="landing" smooth duration={500}>Home</Link>
        <Link to="projects" smooth duration={500}>Projects</Link>
        <Link to="contact" smooth duration={500}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
