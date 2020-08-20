const mongoose = require("mongoose");

const signUpsSchema = new mongoose.Schema({
  signupLastN: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  signupFirstN: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  signupEmail: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  signupLicState: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  signupLicNo: {
    type: String,
    trim: true,
  },
  signupBizName: {
    type: String,
    trim: true,
    required: true,
  },
  signupBizSt: {
    type: String,
    trim: true,
    required: true,
  },
  signupBizCity: {
    type: String,
    trim: true,
    required: true,
  },
  signupBizZip: {
    type: String,
    trim: true,
  },
  signupPhoneNo: {
    type: String,
    pattern: "^([0-9]{3}-[0-9]{3}-[0-9]{4}$",
  },

  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Signups", signUpsSchema);
