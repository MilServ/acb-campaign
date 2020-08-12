const express = require("express");
const router = express.Router();
const { create } = require("../controllers/signup");

// This route is for Veterans to submit info form without login
router.post("/signup", create);

module.exports = router;
