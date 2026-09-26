import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://shanthi-portfolio.onrender.com/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        error.message ||
        "Unable to send message. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="section-label">
          <span>06</span>
          GET IN TOUCH
        </div>

        <div className="contact-main">

          {/* LEFT */}

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

            <div className="contact-details">

              <a
                href="mailto:shanthinenavath4@gmail.com"
                className="contact-email"
              >
                <small>EMAIL</small>

                <span>
                  shanthinenavath4@gmail.com
                  <b>↗</b>
                </span>
              </a>

              <a
                href="https://github.com/shanthinenavath4-arch"
                target="_blank"
                rel="noreferrer"
                className="contact-email"
              >
                <small>GITHUB</small>

                <span>
                  github.com/shanthinenavath4-arch
                  <b>↗</b>
                </span>
              </a>

              <a
                href="https://linkedin.com/in/shanthi-nenavath"
                target="_blank"
                rel="noreferrer"
                className="contact-email"
              >
                <small>LINKEDIN</small>

                <span>
                  linkedin.com/in/shanthi-nenavath
                  <b>↗</b>
                </span>
              </a>

            </div>

          </div>


          {/* RIGHT */}

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
                  Thanks for reaching out. Your message
                  has been successfully saved.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
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
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label>
                    <span>02 / EMAIL</span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </label>

                </div>


                <label>
                  <span>03 / SUBJECT</span>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </label>


                <label>
                  <span>04 / MESSAGE</span>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your project..."
                    rows="6"
                    required
                  />
                </label>


                {error && (
                  <p
                    style={{
                      marginBottom: "15px",
                      color: "#ff6b6b",
                      fontSize: "12px",
                    }}
                  >
                    {error}
                  </p>
                )}


                <button
                  type="submit"
                  className="contact-submit"
                  disabled={loading}
                >
                  <span>
                    {loading
                      ? "SENDING..."
                      : "SEND MESSAGE"}
                  </span>

                  <b>
                    {loading ? "..." : "↗"}
                  </b>
                </button>

              </form>

            )}

          </div>

        </div>


        {/* BOTTOM */}

        <div className="contact-bottom">

          <div>
            <span>BASED IN</span>

            <strong>
              HYDERABAD / INDIA
            </strong>
          </div>

          <div>
            <span>AVAILABLE FOR</span>

            <strong>
              FULL STACK / SOFTWARE ROLES
            </strong>
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