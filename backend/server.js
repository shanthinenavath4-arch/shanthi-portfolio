const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { Resend } = require("resend");
const Contact = require("./models/Contact");

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();

const PORT = process.env.PORT || 5000;

/* =========================
   MIDDLEWARE
========================= */

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://shanthi-portfolio.vercel.app",
    ],
  })
);

app.use(express.json());

/* =========================
   MONGODB CONNECTION
========================= */

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((error) => {
    console.error("MongoDB connection failed ❌");
    console.error(error.message);
  });

/* =========================
   ROOT ROUTE
========================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Shanthi Portfolio API is running 🚀",
  });
});

/* =========================
   HEALTH CHECK
========================= */

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is healthy",
  });
});

/* =========================
   CONTACT FORM API
========================= */

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    /* CHECK REQUIRED FIELDS */

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    /* CLEAN DATA */

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    /* =========================
       SAVE TO MONGODB
    ========================= */

    const contact = await Contact.create({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
    });

    console.log("Contact saved to MongoDB ✅");

    /* =========================
       SEND EMAIL WITH RESEND
    ========================= */

    const { data: emailData, error: emailError } =
      await resend.emails.send({
        from: "Shanthi Portfolio <onboarding@resend.dev>",
        to: ["shanthinenavath4@gmail.com"],
        replyTo: cleanEmail,
        subject: `Portfolio Contact: ${cleanSubject}`,

        html: `
          <div style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            padding: 30px;
            background: #f7f9fc;
            color: #111827;
          ">

            <div style="
              background: #050608;
              color: white;
              padding: 24px;
              border-radius: 12px 12px 0 0;
            ">
              <h2 style="margin: 0;">
                New Portfolio Message
              </h2>

              <p style="
                margin: 8px 0 0;
                color: #55c7ff;
              ">
                Shanthi Nenavath
              </p>
            </div>

            <div style="
              background: white;
              padding: 25px;
              border-radius: 0 0 12px 12px;
            ">

              <p>
                <strong>Name:</strong>
                ${cleanName}
              </p>

              <p>
                <strong>Email:</strong>
                ${cleanEmail}
              </p>

              <p>
                <strong>Subject:</strong>
                ${cleanSubject}
              </p>

              <hr style="
                border: none;
                border-top: 1px solid #e5e7eb;
                margin: 20px 0;
              " />

              <h3>Message</h3>

              <p style="
                line-height: 1.7;
                white-space: pre-line;
              ">
                ${cleanMessage}
              </p>

              <hr style="
                border: none;
                border-top: 1px solid #e5e7eb;
                margin: 25px 0;
              " />

              <p style="
                color: #6b7280;
                font-size: 12px;
              ">
                Sent from Shanthi Nenavath's portfolio contact form.
              </p>

            </div>

          </div>
        `,
      });

    if (emailError) {
      console.error(
        "Resend email error ❌:",
        emailError
      );

      // MongoDB save succeeded even if email fails.
      return res.status(201).json({
        success: true,
        message:
          "Message received, but email notification could not be sent.",
        data: contact,
      });
    }

    console.log(
      "Email notification sent successfully ✅",
      emailData
    );

    /* =========================
       SUCCESS RESPONSE
    ========================= */

    res.status(201).json({
      success: true,
      message: "Message saved successfully.",
      data: contact,
    });

  } catch (error) {

    console.error(
      "Contact submission error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to save message.",
    });
  }
});

/* =========================
   START SERVER
========================= */

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Backend running on port ${PORT}`
  );
});