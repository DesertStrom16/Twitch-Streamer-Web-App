const express = require("express");

const feedController = require("../controllers/streamer");

const router = express.Router();

// POST /streamer/new-video
router.post("/new-video", feedController.postLoadVideos);

// POST /streamer/publish-video
router.post("/publish-video", feedController.postPublishVideo)

module.exports = router;
