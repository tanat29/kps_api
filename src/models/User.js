const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  dateTime: {
    type: Date,
    default: Date.now(),
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  line: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  shop: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
