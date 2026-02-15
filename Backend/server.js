const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Pick = require("./models/Pick"); // MUST exist

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/buying-dojo")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  });

// health check
app.get("/", (req, res) => {
  res.send("API running");
});

// POST: Personalized Pick
app.post("/personalized-pick", async (req, res) => {
  try {
    const { name, email, category, budget, useCase, urgency } = req.body;

    // strict validation
    if (!name || !email || !category || !budget || !useCase || !urgency) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const pick = await Pick.create({
      name,
      email,
      category,
      budget,
      useCase,
      urgency,
    });

    res.status(201).json({
      success: true,
      data: pick,
    });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
