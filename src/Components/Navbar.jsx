import React, { useState, useEffect, useRef } from "react";
import "../css/nav.css";

// اللينكات اللي في النص
const navLinks = [
  { label: "Home", href: "/", icon: "fa-solid fa-house", isHome: true },
  { label: "About", href: "/#about", icon: "fa-regular fa-circle-user" },
  { label: "Skills", href: "/#Skill", icon: "fa-solid fa-border-all" },
  { label: "Projects", href: "/#projects", icon: "fa-regular fa-folder-open" },
  { label: "Contact", href: "/#contact", icon: "fa-regular fa-envelope" },
];

// الصفحات اللي جوه الـ menu، ضيف أي صفحة جديدة هنا
const menuPages = [
  { label: "Arcade", href: "/arcade", icon: "fa-solid fa-gamepad" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;
      const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
      const currentScrollY = window.scrollY;

      // فوق الـ about: ظاهر. بعده: يظهر لو طالع، يختفي لو نازل
      setVisible(currentScrollY < aboutTop || currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // قفل الـ menu لما تدوس بره أو Escape
  useEffect(() => {
    if (!menuOpen) return;

    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    const handleKey = (e) => e.key === "Escape" && setMenuOpen(false);

    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  // لو الناف بار اختفى، اقفل الـ menu
  useEffect(() => {
    if (!visible) setMenuOpen(false);
  }, [visible]);

  // Home: لو احنا في الصفحة الرئيسية اطلع فوق من غير reload
  const handleHomeClick = (e) => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <nav className={`navbar ${visible ? "" : "navbar--hidden"}`}>
      {/* w-100 مهمة: .navbar بتاع Bootstrap هو display:flex */}
      <div className="d-flex align-items-center justify-content-between gap-3 w-100">
        {/* اللوجو (شمال) */}
        <a href="/" className="d-flex flex-shrink-0" onClick={handleHomeClick} aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 230" width="50" height="45" fill="none">
            <defs>
              <linearGradient id="left" x1="25" y1="210" x2="100" y2="35" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6C79F2" />
                <stop offset=".55" stopColor="#6A3EDE" />
                <stop offset="1" stopColor="#6116DA" />
              </linearGradient>
              <linearGradient id="innerL" x1="95" y1="35" x2="160" y2="210" gradientUnits="userSpaceOnUse">
                <stop stopColor="#530FD1" />
                <stop offset=".5" stopColor="#440DC1" />
                <stop offset="1" stopColor="#6845E7" />
              </linearGradient>
              <linearGradient id="innerR" x1="160" y1="210" x2="225" y2="35" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6845E7" />
                <stop offset=".55" stopColor="#7622E5" />
                <stop offset="1" stopColor="#A95DF2" />
              </linearGradient>
              <linearGradient id="right" x1="225" y1="35" x2="285" y2="210" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9A4DF0" />
                <stop offset=".45" stopColor="#6D13DC" />
                <stop offset="1" stopColor="#6308DF" />
              </linearGradient>
            </defs>
            <g strokeWidth="62" strokeLinecap="round">
              <path d="M98 45 L160 185" stroke="url(#innerL)" />
              <path d="M222 45 L284 185" stroke="url(#right)" />
              <path d="M36 185 L98 45" stroke="url(#left)" />
              <path d="M160 185 L222 45" stroke="url(#innerR)" />
            </g>
          </svg>
        </a>

        {/* اللينكات (النص) - بتختفي تحت 992px وبتروح للـ menu */}
        <ul className="nav flex-nowrap d-none d-lg-flex flex-grow-1 justify-content-center gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link d-flex align-items-center gap-2"
                onClick={link.isHome ? handleHomeClick : undefined}
              >
                <i className={link.icon} aria-hidden="true"></i>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* الدارك مود + الـ menu (يمين) */}
        <div className="d-flex align-items-center gap-3 flex-shrink-0">
          <button
            className={`theme-toggle-btn ${darkMode ? "active" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            <div className="toggle-circle">
              <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
            </div>
          </button>

          <div className="vr align-self-center" style={{ height: 28 }}></div>

          <div className="dropdown" ref={menuRef}>
            <button
              className={`menu-btn d-flex align-items-center justify-content-center p-0 ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>

            <ul
              className={`dropdown-menu dropdown-menu-end mt-3 ${menuOpen ? "show" : ""}`}
              data-bs-popper="static"
            >
              {/* على الشاشات الصغيرة اللينكات الرئيسية بتظهر هنا */}
              {navLinks.map((link) => (
                <li key={link.label} className="d-lg-none">
                  <a
                    href={link.href}
                    className="dropdown-item d-flex align-items-center gap-2"
                    onClick={link.isHome ? handleHomeClick : () => setMenuOpen(false)}
                  >
                    <i className={link.icon} aria-hidden="true"></i>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="d-lg-none"><hr className="dropdown-divider" /></li>

              {menuPages.map((page) => (
                <li key={page.href}>
                  <a
                    href={page.href}
                    className="dropdown-item d-flex align-items-center gap-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    <i className={page.icon} aria-hidden="true"></i>
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;