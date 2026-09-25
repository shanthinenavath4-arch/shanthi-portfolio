import React, { useState } from "react";
import "./Projects.css";

import shopmatrixImage from "../assets/shopmatrix.png";
import fotoowlImage from "../assets/fotoowl.png";
import adosxImage from "../assets/adosx-reconciliation.png";
import vaultxImage from "../assets/vaultx.png";

function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      number: "01",
      type: "FULL STACK / E-COMMERCE",
      title: "ShopMatrix",
      description:
        "A modern full-stack e-commerce platform focused on clean product discovery, responsive interfaces and real-world application architecture.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      link: "https://shopmatrix-1.onrender.com",
      image: shopmatrixImage,
    },

    {
      number: "02",
      type: "MOBILE / REACT NATIVE",
      title: "FotoOwl",
      description:
        "A mobile gallery experience with image discovery, search, filters, favorites and image download functionality.",
      tech: [
        "React Native",
        "Expo",
        "Zustand",
        "REST API",
      ],
      link: "https://foto-owl-chi.vercel.app/",
      image: fotoowlImage,
    },

    {
      number: "03",
      type: "DATA / RECONCILIATION",
      title: "ADOSX Reconciliation",
      description:
        "A data-quality reconciliation platform for reviewing disagreements between System A and System B.",
      tech: [
        "React",
        "Python",
        "REST APIs",
      ],
      link: "https://adosx-reconciliation.vercel.app/",
      image: adosxImage,
    },

    {
      number: "04",
      type: "FULL STACK / FILE MANAGEMENT",
      title: "VaultX",
      description:
        "A private file workspace concept combining authentication, file management and a premium dashboard experience.",
      tech: [
        "React",
        "Express",
        "MongoDB",
        "Multer",
      ],
      link: "#contact",
      image: vaultxImage,
    },
  ];

  const currentProject = projects[activeProject];

  return (
    <section
      className="projects"
      id="projects"
    >
      <div className="projects-container">

        {/* SECTION LABEL */}

        <div className="section-label">
          <span>04</span>
          SELECTED WORK
        </div>

        {/* HEADING */}

        <div className="projects-heading">

          <div>
            <p className="projects-kicker">
              PROJECTS / 2026
            </p>

            <h2>
              Built to be
              <span> useful.</span>
            </h2>
          </div>

          <p>
            A selection of applications I've designed
            and developed across web, mobile, backend
            and data workflows.
          </p>

        </div>

        {/* SHOWCASE */}

        <div className="projects-showcase">

          {/* PROJECT MENU */}

          <div className="projects-menu">

            {projects.map((project, index) => (
              <button
                key={project.title}
                className={`project-selector ${
                  activeProject === index
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() =>
                  setActiveProject(index)
                }
                onClick={() =>
                  setActiveProject(index)
                }
              >

                <span className="project-selector-number">
                  {project.number}
                </span>

                <span className="project-selector-title">
                  {project.title}
                </span>

                <span className="project-selector-arrow">
                  ↗
                </span>

              </button>
            ))}

          </div>

          {/* PROJECT PREVIEW */}

          <div className="project-preview">

            {/* TOP BAR */}

            <div className="preview-top">

              <span>
                {currentProject.type}
              </span>

              <span>
                {currentProject.number} / 04
              </span>

            </div>

            {/* IMAGE */}

            <div className="preview-visual">

              <img
                src={currentProject.image}
                alt={`${currentProject.title} project preview`}
                className="project-image"
              />

              <div className="project-image-overlay" />

              <div className="preview-center">

                <span>
                  SELECTED BUILD
                </span>

                <h3>
                  {currentProject.title}
                </h3>

                <div className="preview-line" />

              </div>

            </div>

            {/* PROJECT INFORMATION */}

            <div className="preview-info">

              <p>
                {currentProject.description}
              </p>

              <div className="preview-bottom">

                {/* TECHNOLOGIES */}

                <div className="project-tech">

                  {currentProject.tech.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

                {/* LINK */}

                <a
                  href={currentProject.link}
                  target={
                    currentProject.link.startsWith(
                      "http"
                    )
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    currentProject.link.startsWith(
                      "http"
                    )
                      ? "noreferrer"
                      : undefined
                  }
                >
                  VIEW PROJECT
                  <span>↗</span>
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="projects-footer">

          <span>
            MORE BUILDS COMING
          </span>

          <span>
            SHANTHI / FULL STACK DEVELOPER
          </span>

        </div>

      </div>
    </section>
  );
}

export default Projects;