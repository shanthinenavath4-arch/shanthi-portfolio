import React, { useEffect, useState } from "react";
import "./Navbar.css";
import shanthiProfile from "../assets/shanthi-profile.png";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* BRAND / HOME */}

        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-symbol">
            <img
              src={shanthiProfile}
              alt="Shanthi Nenavath"
            />
          </span>

          <span className="brand-name">
            SHANTHI<span>.</span>
          </span>
        </a>

        {/* DESKTOP NAV */}

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">What I Do</a>
          <a href="#projects">Work</a>
          <a href="#resume">Resume</a>
          <a href="#terminal">Terminal</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* ACTIONS */}

        <div className="navbar-actions">

          {/* THEME */}

          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span
              className={
                theme === "dark" ? "active" : ""
              }
            >
              ☾
            </span>

            <span
              className={
                theme === "light" ? "active" : ""
              }
            >
              ☀
            </span>
          </button>

          {/* LET'S TALK */}

          <a
            href="#contact"
            className="talk-button"
          >
            Let's Talk
            <span>↗</span>
          </a>

          {/* MOBILE MENU */}

          <button
            className={`menu-button ${
              menuOpen ? "open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav>

          <a
            href="#home"
            onClick={closeMenu}
          >
            <small>01</small>
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            <small>02</small>
            About
          </a>

          <a
            href="#services"
            onClick={closeMenu}
          >
            <small>03</small>
            What I Do
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
          >
            <small>04</small>
            Selected Work
          </a>

          <a
            href="#resume"
            onClick={closeMenu}
          >
            <small>05</small>
            Resume
          </a>

          <a
            href="#terminal"
            onClick={closeMenu}
          >
            <small>06</small>
            Terminal
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            <small>07</small>
            Contact
          </a>

        </nav>

        <div className="mobile-footer">
          FULL STACK DEVELOPER
          <span>HYDERABAD, INDIA</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;