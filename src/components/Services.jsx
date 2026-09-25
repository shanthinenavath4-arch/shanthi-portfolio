import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="section-label">
          <span>02</span>
          WHAT I DO
        </div>

        <div className="services-heading">
          <h2>
            I build things
            <span> that work.</span>
          </h2>

          <p>
            From polished interfaces to reliable backend systems,
            I focus on building products that are functional,
            scalable and easy to use.
          </p>
        </div>

        <div className="services-list">

          <div className="service-item">
            <div className="service-number">01</div>

            <div className="service-main">
              <h3>Full Stack Development</h3>

              <p>
                Building complete web applications from frontend
                interfaces to backend APIs, databases and deployment.
              </p>

              <div className="service-tech">
                React · Node.js · Express · MongoDB
              </div>
            </div>

            <div className="service-arrow">↗</div>
          </div>

          <div className="service-item">
            <div className="service-number">02</div>

            <div className="service-main">
              <h3>Frontend Engineering</h3>

              <p>
                Creating responsive and thoughtful interfaces with
                clean component architecture and modern UI practices.
              </p>

              <div className="service-tech">
                React · JavaScript · HTML · CSS · Tailwind
              </div>
            </div>

            <div className="service-arrow">↗</div>
          </div>

          <div className="service-item">
            <div className="service-number">03</div>

            <div className="service-main">
              <h3>Backend & APIs</h3>

              <p>
                Designing REST APIs, authentication flows and
                database-driven systems for real-world applications.
              </p>

              <div className="service-tech">
                Node.js · Express · Python · SQL · MongoDB
              </div>
            </div>

            <div className="service-arrow">↗</div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;