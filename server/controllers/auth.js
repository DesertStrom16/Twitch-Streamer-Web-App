const axios = require("axios").default;
const User = require("../models/user");

exports.postAuth = async (req, res, next) => {
  res.set("Content-Type", "application/json");
  const code = req.body.code;
  console.log(code);

  if (!code) {
    console.log("code is falsey");
  }

  if (code) {
    console.log("code is truthy");

    axios
      .post(
        `https://id.twitch.tv/oauth2/token?client_id=rggrr0wfq2zb6m42yvki7hzi71x7jn&client_secret=jd97lkc9whxdicjg2xdpq2h3mn7ir2&code=${code}&grant_type=authorization_code&redirect_uri=http://localhost:3000/register/`
      )
      .then((response1) => {
        axios({
          method: "get",
          url: "https://api.twitch.tv/helix/users",
          headers: {
            'Client-ID': 'rggrr0wfq2zb6m42yvki7hzi71x7jn',
            Authorization: `Bearer ${response1.data.access_token}`,
          },
        })
          .then((response2) => {
            // Check is User already exists in database
            User.findOne({ id: response2.data.data[0].id })
              .then((user) => {
                if (user) {
                  // User is found in database
                  // Update access and refresh tokens for returning user
                  console.log(response1.data);
                  user.access_token = response1.data.access_token;
                  user.refresh_token = response1.data.refresh_token;
                  user.save().then(console.log("Update to Database complete."));
                  console.log(user);
                } else {
                  // No User Found, create a new User
                  console.log("Creating New User!");

                  // Save new User to database
                  const user = new User({
                    id: response2.data.data[0].id,
                    login: response2.data.data[0].login,
                    display_name: response2.data.data[0].display_name,
                    profile_image_url: response2.data.data[0].profile_image_url,
                    access_token: response1.data.access_token,
                    refresh_token: response1.data.refresh_token,
                  });
                  user
                    .save()
                    .then((result) => {
                      // console.log(result);
                      console.log("Created User With New Fields!!!");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              })
              .then((result) => {
                // Send User Object to Redux regardless of new or returning user.
                res.json({
                  id: response2.data.data[0].id,
                  login: response2.data.data[0].login,
                  display_name: response2.data.data[0].display_name,
                  profile_image_url: response2.data.data[0].profile_image_url,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
