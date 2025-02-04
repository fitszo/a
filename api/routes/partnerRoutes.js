import express from "express";
import {
  loginPartner,
  getPartnerDetails,
  logoutPartner,
  registerPartner,
  getAllPartners,
} from "../control/partnerControl.js";
import { verifyAdmin, verifyPartner } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginPartner);
router.get("/details", verifyPartner, getPartnerDetails);
router.post("/logout", verifyPartner, logoutPartner);

router.post("/register", verifyAdmin, registerPartner); // Create Partner
router.get("/all", verifyAdmin, getAllPartners);

export default router;
