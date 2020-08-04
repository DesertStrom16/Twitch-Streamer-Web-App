const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  video_id: Number,
  user_id: Number,
  thumbnail_url: String,
  url: String,
  number_of_views: Number,
});

module.exports = mongoose.model("Video", videoSchema);
