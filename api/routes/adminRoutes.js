import express from "express";
import {
  loginAdmin,
  getAdminDetails,
  logoutAdmin,
} from "../control/adminControl.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/details", verifyAdmin, getAdminDetails);
router.post("/logout", verifyAdmin, logoutAdmin);

export default router;
