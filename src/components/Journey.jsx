import React from "react";
import "./Journey.css";

function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="journey-container">

        <div className="section-label">
          <span>05</span>
          MY JOURNEY
        </div>

        <div className="journey-intro">
          <div>
            <p>FROM LEARNING TO BUILDING</p>

            <h2>
              The path behind
              <span> the code.</span>
            </h2>
          </div>

          <div className="journey-description">
            A snapshot of my journey from engineering education
            into full-stack development and real-world projects.
          </div>
        </div>

        <div className="journey-list">

          <div className="journey-card">
            <div className="journey-number">01</div>

            <div className="journey-year">
              2026
            </div>

            <div className="journey-content">
              <span>EDUCATION</span>

              <h3>
                B.Tech — Electrical & Electronics Engineering
              </h3>

              <p>
                Completed my B.Tech journey while developing
                a strong foundation in engineering, problem
                solving and technology.
              </p>

              <div className="journey-tags">
                <span>B.Tech</span>
                <span>EEE</span>
                <span>2026</span>
              </div>
            </div>
          </div>

          <div className="journey-card">
            <div className="journey-number">02</div>

            <div className="journey-year">
              2025
            </div>

            <div className="journey-content">
              <span>DEVELOPMENT</span>

              <h3>
                Full Stack Development
              </h3>

              <p>
                Expanded into modern web development across
                frontend, backend, databases, APIs and deployment.
              </p>

              <div className="journey-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div className="journey-card">
            <div className="journey-number">03</div>

            <div className="journey-year">
              2026
            </div>

            <div className="journey-content">
              <span>PROJECTS</span>

              <h3>
                Building Real Applications
              </h3>

              <p>
                Turned ideas into working products including
                ShopMatrix, FotoOwl, ADOSX and VaultX.
              </p>

              <div className="journey-tags">
                <span>ShopMatrix</span>
                <span>FotoOwl</span>
                <span>ADOSX</span>
                <span>VaultX</span>
              </div>
            </div>
          </div>

          <div className="journey-card current">
            <div className="journey-number">04</div>

            <div className="journey-year">
              NOW
            </div>

            <div className="journey-content">
              <span>NEXT CHAPTER</span>

              <h3>
                Open to New Opportunities
              </h3>

              <p>
                Continuing to improve my engineering skills,
                build meaningful products and contribute to
                real-world software teams.
              </p>

              <div className="journey-status">
                <i></i>
                OPEN TO OPPORTUNITIES
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Journey;