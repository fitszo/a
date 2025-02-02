const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Form_data = new Schema({
  Partner_name: {
    type: String,
    required: true,
  },
  contact_no: {
    type: Number,
    require: true,
    unique: true,
  },
  Partner_mail: {
    type: String,
  },
});

module.exports = mongoose.model("Partner_data", Form_data);
