const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Partner", PartnerSchema, "partner_logins");
