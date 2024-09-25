const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  dateTime: {
    type: Date,
    default: Date.now(),
  },
  product_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("favorite", favoriteSchema);
