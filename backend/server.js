const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Contact = require("./models/Contact");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

/* =========================
   MIDDLEWARE
========================= */

app.use(
  cors({
    origin: "http://localhost:5173",
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

    /* CREATE CONTACT */

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    /* SUCCESS RESPONSE */

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

app.listen(PORT, () => {
  console.log(
    `Backend running on http://localhost:${PORT}`
  );
});