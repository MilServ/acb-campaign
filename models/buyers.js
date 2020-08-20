const mongoose = require("mongoose");

const buyersSchema = new mongoose.Schema({
  buyerLastN: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  buyerFirstN: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  buyerEmail: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  buyerLicState: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  buyerLicNo: {
    type: String,
    trim: true,
  },
  buyerBizName: {
    type: String,
    trim: true,
    required: true,
  },
  buyerBizSt: {
    type: String,
    trim: true,
    required: true,
  },
  buyerBizCity: {
    type: String,
    trim: true,
    required: true,
  },
  buyerBizZip: {
    type: String,
    trim: true,
  },
  buyerPhoneNo: {
    type: String,
    pattern: "^([0-9]{3}-[0-9]{3}-[0-9]{4}$",
  },

  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("buyers", buyersSchema);
