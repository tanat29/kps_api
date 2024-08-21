const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  dateTime: {
    type: Date,
    default: Date.now(),
  },

  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
