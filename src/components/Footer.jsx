import React from "react";
import "./Footer.css";
import shanthiProfile from "../assets/shanthi-profile.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =========================================
            TOP
        ========================================= */}

        <div className="footer-top">

          <div className="footer-brand">

            <div className="footer-logo">
              <img
                src={shanthiProfile}
                alt="Shanthi Nenavath"
              />
            </div>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

          </div>


          {/* BACK TO TOP */}

          <a
            href="#home"
            className="footer-back"
          >
            <span className="footer-back-text">
              BACK TO TOP
            </span>

            <span className="footer-back-icon">
              ↑
            </span>
          </a>

        </div>


        {/* =========================================
            DIVIDER
        ========================================= */}

        <div className="footer-divider"></div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="footer-bottom">

          <div className="footer-info">
            <span>© 2026 SHANTHI NENAVATH</span>
          </div>

          <div className="footer-info">
            <span>FULL STACK DEVELOPER</span>
          </div>


          {/* LINKS */}

          <div className="footer-links">

            <a
              href="https://github.com/Shanthishanthinenavath4-arch"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:yourmail@gmail.com">
              Email
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;