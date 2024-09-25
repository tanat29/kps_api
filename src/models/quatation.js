const mongoose = require("mongoose");

// Timestamp dateTime;
// String dateTimeText;
// List product;
// String quatation_id;
// String status;
// String user_id;

const quatationSchema = new mongoose.Schema({
  dateTime: {
    type: Number,
    required: true,
  },
  dateTimeText: {
    type: String,
    required: true,
  },
  product: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("quatation", quatationSchema);
