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

export const submitFitnessZone = async (req, res) => {
 try {
   const {
     gymName,
     ownerName,
     contactNo,
     businessEmail,
     gstin,
     street,
     pincode,
     city,
     district,
     state,
     locationLink,
   } = req.body;

   // ✅ Validate required fields
   if (!gymName || !ownerName || !contactNo || !businessEmail) {
     return res.status(400).json({ message: "Required fields are missing!" });
   }

   // ✅ Check if files were uploaded
   if (
     !req.files ||
     !req.files.infrastructureImage ||
     !req.files.governmentDoc
   ) {
     return res
       .status(400)
       .json({ message: "Both documents must be uploaded!" });
   }

   const partner = await Partner.findById(req.partnerId);
   if (!partner) {
     return res.status(404).json({ message: "Partner not found!" });
   }

   partner.fitnessZone.details = {
     gymName,
     ownerName,
     contactNo,
     businessEmail,
     gstin,
     address: { street, pincode, city, district, state, locationLink },
     documents: {
       infrastructureImage: req.files.infrastructureImage[0].path,
       governmentDoc: req.files.governmentDoc[0].path,
     },
     status: "pending",
   };
   partner.fitnessZone.launched = true;

   await partner.save();
   res
     .status(200)
     .json({ message: "Fitness Zone details submitted successfully!" });
 } catch (error) {
   console.error("Server Error:", error); // ✅ Log detailed error
   res
     .status(500)
     .json({ message: "Internal Server Error", error: error.message });
 }
};