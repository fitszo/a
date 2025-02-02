const mongoose = require('mongoose');

const adminLoginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('AdminLogin', adminLoginSchema);
