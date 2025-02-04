import express from "express";
import { loginPartner, getPartnerDetails, logoutPartner } from "../control/partnerControl.js";
import { verifyPartner } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", loginPartner);
router.get("/details", verifyPartner, getPartnerDetails);
router.post("/logout", verifyPartner, logoutPartner);

export default router;
