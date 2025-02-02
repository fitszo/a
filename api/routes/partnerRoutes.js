const express = require("express");
const jwt = require("jsonwebtoken");
const Partner = require("../models/PartnerLogin");
const authenticate = require("../middleware/auth");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const partner = await Partner.findOne({ email });

  if (!partner || partner.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email, role: "partner" }, JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

// Protected Dashboard
router.get("/dashboard", authenticate("partner"), (req, res) => {
  res.json({ message: "Welcome to Partner Dashboard" });
});

module.exports = router;