import React from "react";
import "./Hero.css";
import shanthiProfile from "../assets/shanthi-profile-removebg-preview.png";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-glow"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">

        {/* STATUS */}
        <div className="hero-status">
          <span></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        {/* INTRO */}
        <p className="hero-intro">
          Hello, I'm
        </p>

        {/* NAME */}
        <h1>
          Shanthi
          <span>Nenavath</span>
        </h1>

        {/* ROLE */}
        <div className="hero-role">
          <i></i>
          Full Stack Developer
        </div>

        {/* DESCRIPTION */}
        <p className="hero-description">
          I build modern, responsive and scalable digital experiences
          using clean code, thoughtful design and real-world technology.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">

          <a
            href="#projects"
            className="hero-btn primary"
          >
            View My Work
            <span>↗</span>
          </a>

          <a
            href="#contact"
            className="hero-btn secondary"
          >
            Let's Connect
            <span>→</span>
          </a>

        </div>

        {/* SOCIAL LINKS */}
        <div className="hero-socials">

          <a
            href="https://github.com/Shanthishanthinenavath4-arch"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:yourmail@gmail.com">
            Email
          </a>

          <span className="hero-location">
            Hyderabad, India
          </span>

        </div>

      </div>

      {/* =========================================
          TRANSPARENT PROFILE IMAGE
      ========================================= */}

      <div className="hero-profile">

        <div className="hero-profile-glow"></div>

        <div className="hero-profile-image">
          <img
            src={shanthiProfile}
            alt="Shanthi Nenavath"
          />
        </div>

      </div>

      {/* SCROLL */}

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <i></i>
      </div>

    </section>
  );
};

export default Hero;