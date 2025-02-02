const mongoose = require("mongoose");

const partnerLoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("PartnerLogin", partnerLoginSchema);
