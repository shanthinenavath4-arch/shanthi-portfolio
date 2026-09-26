const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const Contact = require("./models/Contact");

dotenv.config();

/* =========================
   GMAIL TRANSPORTER
========================= */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

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

    /* =========================
       SEND EMAIL
    ========================= */

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: cleanEmail,
      subject: `Portfolio Contact: ${cleanSubject}`,

      text: `
New message from your portfolio.

Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Message:
${cleanMessage}
      `,
    });

    console.log("Email notification sent successfully ✅");

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