const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Partner = require("../models/Partner");
const authenticate = require("../middleware/auth");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Admin Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin || admin.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email, role: "admin" }, JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

// Admin Dashboard
router.get("/dashboard", authenticate("admin"), (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
});

// Create Partner (Admin Only)
router.post("/create-partner", authenticate("admin"), async (req, res) => {
  const { email, password } = req.body;

  try {
    const newPartner = new Partner({ email, password });
    await newPartner.save();
    res.json({ message: "Partner created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error creating partner", error });
  }
});

module.exports = router;