import express from "express";
import multer from "multer";
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

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
