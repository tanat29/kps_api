const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  dateTime: {
    type: Date,
    default: Date.now(),
  },
  category: {
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
});

module.exports = mongoose.model("subCategory", subCategorySchema);
