const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now(),
  },
  photo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("News", newsSchema);
