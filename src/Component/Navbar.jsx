import React, { useState, useEffect, useRef } from "react";
import "../css/nav.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;
      const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
      const currentScrollY = window.scrollY;
      const isAboveAbout = currentScrollY < aboutTop;

      if (isAboveAbout) {
        setVisible(true);
      } else {
        // بعد الـ about → يظهر لو طالع، يختفي لو نازل
        if (currentScrollY < lastScrollY.current) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${visible ? "navbar--visible" : "navbar--hidden"}`}>
      <div className="container">
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#Skill" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <button
          className={`theme-toggle-btn ${darkMode ? "active" : ""}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <div className="toggle-circle">
            {darkMode ? (
              <i className="fa-solid fa-sun sun-icon"></i>
            ) : (
              <i className="fa-solid fa-moon moon-icon"></i>
            )}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;