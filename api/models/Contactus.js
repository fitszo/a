const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  massage: String,
});

const ContactModel = mongoose.model("Contact", ContactSchema);

module.exports = ContactModel;