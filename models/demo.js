const mongoose = require("mongoose");

const demosSchema = new mongoose.Schema({
  demoLastN: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  demoFirstN: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  demoEmail: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  demoLicState: {
    type: Array,
    required: true,
  },
  demoStateLicNo: {
    type: String,
    trim: true,
  },
  demoBizName: {
    type: String,
    trim: true,
    required: true,
  },
  demoBizStreet: {
    type: String,
    trim: true,
    required: true,
  },
  demoBizCity: {
    type: String,
    trim: true,
    required: true,
  },
  demoBizState: {
    type: String,
    trim: true,
    required: true,
  },
  demoBizZip: {
    type: String,
    trim: true,
  },
  demoPhoneNo: {
    type: String,
    pattern: "^([0-9]{3}-[0-9]{3}-[0-9]{4}$",
  },

  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("demos", demosSchema);
