const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now(),
  },
  detail: {
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
  price: {
    type: Number,
    required: true,
  },
  price_tag: {
    type: Number,
    required: true,
  },
  product_id: {
    type: String,
    required: true,
  },
  promotion: {
    type: String,
    required: true,
  },
  option: {
    type: Object,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
