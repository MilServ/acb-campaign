const express = require("express");
const router = express.Router();
const { create } = require("../controllers/buyer");

// This route is for Veterans to submit info form without login
router.post("/buyer", create);

module.exports = router;
