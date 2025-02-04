import Partner from "../models/PartnerLogin.js";
import jwt from "jsonwebtoken";

// Partner Login
export const loginPartner = async (req, res) => {
  const { email, password } = req.body;
  const partner = await Partner.findOne({ email, password });

  if (!partner) return res.status(401).json({ message: "Invalid Credentials" });

  partner.lastLogin = new Date();
  await partner.save();

  const token = jwt.sign(
    { id: partner._id, role: "partner" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("partnerToken", token, { httpOnly: true, maxAge: 3600000 }).json({
    message: "Login Successful",
    id: partner._id,
    lastLogin: partner.lastLogin,
  });
};

// Get Partner Details
export const getPartnerDetails = async (req, res) => {
  const partner = await Partner.findById(req.partnerId);
  res.json({ lastLogin: partner.lastLogin });
};

// Logout Partner
export const logoutPartner = (req, res) => {
  res.clearCookie("partnerToken").json({ message: "Logged out" });
};

// ✅ Register New Partner (Admin Only)
export const registerPartner = async (req, res) => {
  try {
    const { name, email, password, fitnessZone } = req.body;

    // Check if partner already exists
    const existingPartner = await Partner.findOne({ email });
    if (existingPartner) {
      return res
        .status(400)
        .json({ message: "Partner already exists with this email." });
    }

    const newPartner = new Partner({ name, email, password, fitnessZone });
    await newPartner.save();

    res.status(201).json({ message: "Partner registered successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while registering partner." });
  }
};

// ✅ Get All Partners (Admin Only)
export const getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.find({}, "-password"); // Exclude passwords
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: "Error fetching partners." });
  }
};
