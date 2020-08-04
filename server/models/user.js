const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  login: String,
  display_name: String,
  profile_image_url: String,
  access_token: String,
  refresh_token: String,
});

module.exports = mongoose.model("User", userSchema);
