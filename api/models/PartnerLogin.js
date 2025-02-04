const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  fitnessZone: String,
  lastLogin: Date,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Partner", PartnerSchema, "partner_logins");