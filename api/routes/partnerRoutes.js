import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  loginPartner,
  getPartnerDetails,
  logoutPartner,
  registerPartner,
  getAllPartners,
  submitFitnessZone,
} from "../control/partnerControl.js";
import { verifyAdmin, verifyPartner } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginPartner);
router.get("/details", verifyPartner, getPartnerDetails);
router.post("/logout", verifyPartner, logoutPartner);

router.post(
  "/submit-fitness-zone",
  verifyPartner,
  upload.fields([
    { name: "infrastructureImage", maxCount: 1 },
    { name: "governmentDoc", maxCount: 1 },
  ]),
  submitFitnessZone
);

router.post("/register", verifyAdmin, registerPartner); // Create Partner
router.get("/all", verifyAdmin, getAllPartners);

export default router;
