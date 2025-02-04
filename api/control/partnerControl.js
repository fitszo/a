import Partner from "../models/Partner.js";
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
