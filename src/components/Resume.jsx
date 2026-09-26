import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">

        <div className="section-label">
          <span>05</span>
          RESUME & LINKS
        </div>

        <div className="resume-main">

          <div className="resume-heading">

            <p className="resume-eyebrow">
              CAREER / PROFILE
            </p>

            <h2>
              Let's build
              <span> something meaningful.</span>
            </h2>

            <p className="resume-description">
              I'm a Full Stack & Mobile Application Developer
              focused on building clean, responsive and practical
              digital products across web, mobile and backend
              technologies.
            </p>

          </div>

          <div className="resume-links">

            {/* RESUME */}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-link resume-primary"
            >
              <div>
                <small>01 / DOCUMENT</small>

                <h3>
                  View Resume
                </h3>

                <p>
                  Education, technical skills, projects
                  and development experience.
                </p>
              </div>

              <span>↗</span>
            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/shanthinenavath4-arch"
              target="_blank"
              rel="noreferrer"
              className="resume-link"
            >
              <div>
                <small>02 / CODE</small>

                <h3>
                  GitHub
                </h3>

                <p>
                  Explore my repositories, projects,
                  experiments and development work.
                </p>
              </div>

              <span>↗</span>
            </a>


            {/* LINKEDIN */}

            <a
              href="https://linkedin.com/in/shanthi-nenavath"
              target="_blank"
              rel="noreferrer"
              className="resume-link"
            >
              <div>
                <small>03 / NETWORK</small>

                <h3>
                  LinkedIn
                </h3>

                <p>
                  Connect with me and follow my
                  professional journey.
                </p>
              </div>

              <span>↗</span>
            </a>

          </div>

        </div>

        <div className="resume-bottom">

          <span>
            SHANTHI NENAVATH
          </span>

          <span>
            FULL STACK DEVELOPER
          </span>

          <span>
            HYDERABAD / INDIA
          </span>

        </div>

      </div>
    </section>
  );
}

export default Resume;