const express = require("express");

const feedController = require("../controllers/auth");

const router = express.Router();

// POST /auth/auth
router.post("/auth", feedController.postAuth);

module.exports = router;
