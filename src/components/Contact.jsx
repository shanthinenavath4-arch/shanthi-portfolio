import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="section-label">
          <span>06</span>
          GET IN TOUCH
        </div>

        <div className="contact-main">

          <div className="contact-intro">

            <p className="contact-eyebrow">
              HAVE A PROJECT / OPPORTUNITY?
            </p>

            <h2>
              Let's make
              <span> something happen.</span>
            </h2>

            <p className="contact-description">
              Whether you have a project, an opportunity,
              or simply want to connect, feel free to reach out.
            </p>

            <a
              href="mailto:yourmail@gmail.com"
              className="contact-email"
            >
              yourmail@gmail.com
              <span>↗</span>
            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/Shanthishanthinenavath4-arch"
              target="_blank"
              rel="noreferrer"
              className="contact-email contact-github"
            >
              github.com/Shanthishanthinenavath4-arch
              <span>↗</span>
            </a>

          </div>

          <div className="contact-form-wrap">

            {submitted ? (
              <div className="contact-success">

                <span className="success-number">
                  01
                </span>

                <h3>
                  Message
                  <span> received.</span>
                </h3>

                <p>
                  Thanks for reaching out. I'll get back
                  to you as soon as possible.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                >
                  SEND ANOTHER
                </button>

              </div>
            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <label>
                    <span>01 / NAME</span>

                    <input
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label>
                    <span>02 / EMAIL</span>

                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </label>

                </div>

                <label>
                  <span>03 / SUBJECT</span>

                  <input
                    type="text"
                    placeholder="What's this about?"
                    required
                  />
                </label>

                <label>
                  <span>04 / MESSAGE</span>

                  <textarea
                    placeholder="Tell me a little about your project..."
                    rows="5"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  <span>SEND MESSAGE</span>
                  <b>↗</b>
                </button>

              </form>

            )}

          </div>

        </div>

        <div className="contact-bottom">

          <div>
            <span>BASED IN</span>
            <strong>HYDERABAD / INDIA</strong>
          </div>

          <div>
            <span>AVAILABLE FOR</span>
            <strong>FULL STACK / SOFTWARE ROLES</strong>
          </div>

          <div>
            <span>STATUS</span>

            <strong className="contact-status">
              <i />
              OPEN TO OPPORTUNITIES
            </strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;