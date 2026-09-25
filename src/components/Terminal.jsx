import React, { useState } from "react";
import "./Terminal.css";

function Terminal() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState(
    'Welcome to Shanthi\'s terminal. Type "help" to begin.'
  );

  const runCommand = () => {
    const cmd = command.trim().toLowerCase();

    if (cmd === "help") {
      setOutput(
        "Available commands: about, stack, projects, contact, clear"
      );
    } else if (cmd === "about") {
      setOutput(
        "Shanthi Nenavath — Full Stack Developer building modern web and mobile applications."
      );
    } else if (cmd === "stack") {
      setOutput(
        "React · JavaScript · Python · Node.js · Express · MongoDB · SQL · React Native"
      );
    } else if (cmd === "projects") {
      setOutput(
        "ShopMatrix · FotoOwl · ADOSX · VaultX"
      );
    } else if (cmd === "contact") {
      setOutput(
        "Scroll to the Contact section or use the Contact link in the navigation."
      );
    } else if (cmd === "clear") {
      setOutput("");
    } else if (cmd === "") {
      return;
    } else {
      setOutput(
        `Command not found: ${cmd}. Type "help" for available commands.`
      );
    }

    setCommand("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      runCommand();
    }
  };

  return (
    <section className="terminal-section" id="terminal">
      <div className="terminal-container">

        <div className="section-label">
          <span>06</span>
          DEVELOPER TERMINAL
        </div>

        <div className="terminal-heading">
          <p>INTERACTIVE / SHANTHI</p>

          <h2>
            Meet me
            <span> in the terminal.</span>
          </h2>
        </div>

        <div className="terminal-window">

          <div className="terminal-top">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>

            <div className="terminal-title">
              shanthi@portfolio:~
            </div>
          </div>

          <div className="terminal-body">

            <div className="terminal-line">
              <span className="terminal-prompt">
                shanthi@portfolio:~$
              </span>

              <span>
                welcome
              </span>
            </div>

            <div className="terminal-output">
              {output}
            </div>

            <div className="terminal-input-row">

              <span className="terminal-prompt">
                shanthi@portfolio:~$
              </span>

              <input
                type="text"
                value={command}
                onChange={(event) =>
                  setCommand(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="type a command..."
                autoComplete="off"
              />

            </div>

          </div>

        </div>

        <div className="terminal-hints">
          <button onClick={() => setCommand("help")}>
            help
          </button>

          <button onClick={() => setCommand("about")}>
            about
          </button>

          <button onClick={() => setCommand("stack")}>
            stack
          </button>

          <button onClick={() => setCommand("projects")}>
            projects
          </button>
        </div>

      </div>
    </section>
  );
}

export default Terminal;