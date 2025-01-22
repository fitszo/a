const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Contact_Us = new Schema({
  name: {
    type: String,
    required: true,
  },
  contactno: {
    type: Number,
    require: true,
  },
  mail: {
    type: String,
  },
  massege: {
    type: String,
  },
});

module.exports = mongoose.model("Conatact_us", Contact_Us);
