const express = require("express");
const router = express.Router();
const { create } = require("../controllers/demo");

// This route is for Veterans to submit info form without login
router.post("/demo", create);

module.exports = router;
