const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // other fields as needed
});

module.exports = mongoose.model('User', userSchema);
