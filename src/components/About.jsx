import React from "react";
import "./About.css";
import introVideo from "../assets/intro-video.mp4";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* SECTION LABEL */}
        <div className="section-label">
          <span>02</span>
          ABOUT ME
        </div>

        <div className="about-main">

          {/* LEFT CONTENT */}
          <div className="about-content">

            <p className="about-eyebrow">
              PROFILE / DEVELOPER
            </p>

            <h2>
              Building with
              <span> purpose.</span>
            </h2>

            <p className="about-text">
              I'm Shanthi Nenavath, a Full Stack Developer
              passionate about creating modern, responsive
              and practical digital experiences.
            </p>

            <p className="about-text">
              I work across frontend, backend and mobile
              development, turning ideas into clean,
              functional and user-focused applications.
            </p>

            {/* DETAILS */}
            <div className="about-details">

              <div className="about-detail">
                <span>EDUCATION</span>
                <strong>B.Tech — EEE</strong>
              </div>

              <div className="about-detail">
                <span>GRADUATION</span>
                <strong>2026</strong>
              </div>

              <div className="about-detail">
                <span>BASED IN</span>
                <strong>Hyderabad, India</strong>
              </div>

            </div>

          </div>

          {/* RIGHT VIDEO */}
          <div className="about-video-wrap">

            <div className="about-video-label">
              <span>01</span>
              INTRODUCTION
            </div>

            <div className="about-video">

              <video
                src={introVideo}
                controls
                playsInline
                preload="metadata"
              />

              <div className="video-corner top-left"></div>
              <div className="video-corner top-right"></div>
              <div className="video-corner bottom-left"></div>
              <div className="video-corner bottom-right"></div>

            </div>

            <div className="about-video-caption">
              <span>SHANTHI NENAVATH</span>
              <span>FULL STACK DEVELOPER</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;