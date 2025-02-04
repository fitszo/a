const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
  lastLogin: Date,
});

export default mongoose.model("Admin", AdminSchema, "admin_logins");