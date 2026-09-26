import React, { useState } from "react";
import "./Terminal.css";

function Terminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);

  const commands = {
    help: `Available commands:
    
whoami      — About Shanthi
skills      — View technical skills
projects    — View selected projects
contact     — Get contact information
clear       — Clear terminal`,

    whoami: `Shanthi Nenavath

Full Stack Developer
B.Tech — Electrical & Electronics Engineering
Graduated: 2026
Based in Hyderabad, India

I build modern web, mobile and backend applications.`,

    skills: `Frontend
→ React
→ JavaScript
→ HTML / CSS
→ Tailwind CSS

Backend
→ Node.js
→ Express.js
→ Python
→ REST APIs

Database
→ MongoDB
→ SQL

Mobile
→ React Native
→ Expo

Tools
→ Git / GitHub
→ Vite
→ VS Code`,

    projects: `01  ShopMatrix
    Full Stack E-Commerce

02  FotoOwl
    React Native Gallery App

03  ADOSX Reconciliation
    Data Reconciliation Platform

04  VaultX
    Full Stack File Workspace`,

    contact: `Email
→ yourmail@gmail.com

GitHub
→ github.com/Shanthishanthinenavath4-arch

Location
→ Hyderabad, India`,

    clear: "",
  };

  const handleCommand = (event) => {
    event.preventDefault();

    const value = command.trim().toLowerCase();

    if (!value) return;

    if (value === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const output =
      commands[value] ||
      `Command not found: ${value}

Type "help" to see available commands.`;

    setHistory((previous) => [
      ...previous,
      {
        command: value,
        output,
      },
    ]);

    setCommand("");
  };

  return (
    <section className="terminal" id="terminal">
      <div className="terminal-container">

        <div className="section-label">
          <span>06</span>
          DEVELOPER TERMINAL
        </div>

        <div className="terminal-intro">

          <div>
            <p className="terminal-eyebrow">
              SYSTEM / SHANTHI
            </p>

            <h2>
              Get to know me
              <span> through code.</span>
            </h2>
          </div>

          <p className="terminal-description">
            A small interactive terminal. Type a command
            and explore my skills, projects and background.
          </p>

        </div>

        <div className="terminal-window">

          <div className="terminal-header">

            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>

            <div className="terminal-title">
              shanthi@portfolio ~ %
            </div>

            <div className="terminal-status">
              ONLINE
            </div>

          </div>

          <div className="terminal-body">

            <div className="terminal-welcome">
              <p>
                <span>+</span> Welcome to Shanthi's terminal.
              </p>

              <p className="terminal-muted">
                Type <strong>help</strong> to see available commands.
              </p>
            </div>

            {history.map((item, index) => (
              <div
                className="terminal-history"
                key={`${item.command}-${index}`}
              >

                <div className="terminal-command-line">
                  <span className="terminal-prompt">
                    shanthi@portfolio ~ %
                  </span>

                  <span>{item.command}</span>
                </div>

                <pre>{item.output}</pre>

              </div>
            ))}

            <form
              className="terminal-input-line"
              onSubmit={handleCommand}
            >
              <span className="terminal-prompt">
                shanthi@portfolio ~ %
              </span>

              <input
                value={command}
                onChange={(event) =>
                  setCommand(event.target.value)
                }
                placeholder="type a command..."
                autoComplete="off"
                spellCheck="false"
              />

              <span className="terminal-cursor" />
            </form>

          </div>

        </div>

        <div className="terminal-footer">
          <span>INTERACTIVE PROFILE</span>
          <span>TYPE "HELP" TO BEGIN</span>
        </div>

      </div>
    </section>
  );
}

export default Terminal;