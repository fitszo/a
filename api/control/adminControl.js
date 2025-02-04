import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

// Admin Login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email, password });

  if (!admin) return res.status(401).json({ message: "Invalid Credentials" });

  admin.lastLogin = new Date();
  await admin.save();

  const token = jwt.sign(
    { id: admin._id, role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("adminToken", token, { httpOnly: true, maxAge: 3600000 }).json({
    message: "Login Successful",
    lastLogin: admin.lastLogin,
  });
};

// Get Admin Details
export const getAdminDetails = async (req, res) => {
  const admin = await Admin.findById(req.adminId);
  res.json({ lastLogin: admin.lastLogin });
};

// Logout Admin
export const logoutAdmin = (req, res) => {
  res.clearCookie("adminToken").json({ message: "Logged out" });
};
