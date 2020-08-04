const axios = require("axios").default;
const User = require("../models/user");
const Video = require("../models/video");

exports.postLoadVideos = async (req, res) => {
  const userId = req.body.userId;

  User.findOne({ id: userId }).then((user) => {
    if (user) {
      axios({
        method: "get",
        url: `https://api.twitch.tv/helix/videos?user_id=${userId}`,
        headers: {
          "Client-ID": "rggrr0wfq2zb6m42yvki7hzi71x7jn",
          Authorization: `Bearer ${user.access_token}`,
        },
      }).then((response) => {
        res.json({ data: response.data.data });
      });
    }
  });
};

exports.postPublishVideo = async (req, res) => {
  const data = req.body.data;
  const userId = req.body.userId;
  const views = req.body.views;

  Video.findOne({ video_id: data.id }).then((video) => {
    if (video) {
      console.log("Video already published!");
    } else {
      console.log("Publishing...");

      const video = new Video({
        video_id: data.id,
        user_id: userId,
        thumbnail_url: data.thumbnail_url,
        url: data.url,
        number_of_views: views,
      });
      video
        .save()
        .then((result) => {
          console.log("New video added to Published Database");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};
