import React, { useState } from "react";
import "./TechStack.css";

function TechStack() {
  const [active, setActive] = useState("React");

  const technologies = [
    {
      name: "React",
      category: "FRONTEND",
      description:
        "Building reusable, responsive and component-driven interfaces.",
      projects: "ShopMatrix · ADOSX · FotoOwl",
    },
    {
      name: "JavaScript",
      category: "LANGUAGE",
      description:
        "Creating interactive application logic and dynamic experiences.",
      projects: "ShopMatrix · FotoOwl · ADOSX",
    },
    {
      name: "Python",
      category: "LANGUAGE",
      description:
        "Used for backend development, automation and application logic.",
      projects: "ADOSX · Backend Systems",
    },
    {
      name: "Node.js",
      category: "BACKEND",
      description:
        "Building server-side applications and scalable backend services.",
      projects: "ShopMatrix · VaultX",
    },
    {
      name: "Express.js",
      category: "BACKEND",
      description:
        "Creating REST APIs and structured backend services.",
      projects: "ShopMatrix · VaultX",
    },
    {
      name: "MongoDB",
      category: "DATABASE",
      description:
        "Working with flexible document-based data models.",
      projects: "ShopMatrix · VaultX",
    },
    {
      name: "SQL",
      category: "DATABASE",
      description:
        "Working with relational data and structured queries.",
      projects: "Data Applications",
    },
    {
      name: "React Native",
      category: "MOBILE",
      description:
        "Building cross-platform mobile experiences with React.",
      projects: "FotoOwl",
    },
    {
      name: "REST APIs",
      category: "BACKEND",
      description:
        "Connecting frontend applications with backend services.",
      projects: "ShopMatrix · FotoOwl · ADOSX",
    },
    {
      name: "Git & GitHub",
      category: "TOOLS",
      description:
        "Version control, collaboration and project management.",
      projects: "All Projects",
    },
    {
      name: "Tailwind CSS",
      category: "UI",
      description:
        "Rapidly creating responsive and consistent interfaces.",
      projects: "Frontend Projects",
    },
    {
      name: "HTML & CSS",
      category: "WEB",
      description:
        "Building accessible and responsive web foundations.",
      projects: "Web Projects",
    },
  ];

  const current =
    technologies.find((tech) => tech.name === active) ||
    technologies[0];

  return (
    <section className="tech" id="tech">

      <div className="tech-container">

        <div className="section-label">
          <span>03</span>
          TECH ARSENAL
        </div>

        <div className="tech-heading">
          <div>
            <p className="tech-kicker">
              TOOLS I BUILD WITH
            </p>

            <h2>
              My technical
              <span> playground.</span>
            </h2>
          </div>

          <p className="tech-intro">
            A practical stack built around modern frontend,
            backend, database and mobile technologies.
          </p>
        </div>

        <div className="tech-layout">

          <div className="tech-list">

            {technologies.map((tech, index) => (
              <button
                key={tech.name}
                className={`tech-item ${
                  active === tech.name ? "active" : ""
                }`}
                onMouseEnter={() => setActive(tech.name)}
                onClick={() => setActive(tech.name)}
              >
                <span className="tech-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="tech-name">
                  {tech.name}
                </span>

                <span className="tech-arrow">
                  ↗
                </span>
              </button>
            ))}

          </div>

          <div className="tech-detail">

            <div className="tech-detail-top">
              <span>{current.category}</span>
              <span>SELECTED</span>
            </div>

            <div className="tech-detail-content">

              <div className="tech-big-number">
                {String(
                  technologies.findIndex(
                    (tech) => tech.name === active
                  ) + 1
                ).padStart(2, "0")}
              </div>

              <h3>{current.name}</h3>

              <p>
                {current.description}
              </p>

              <div className="tech-used">
                <span>USED IN</span>

                <strong>
                  {current.projects}
                </strong>
              </div>

            </div>

            <div className="tech-detail-footer">
              <span>SHANTHI / STACK</span>

              <span>
                {technologies.length} TECHNOLOGIES
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TechStack;