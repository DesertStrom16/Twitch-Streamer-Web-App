const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const streamerRoutes = require("./routes/streamer");

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", authRoutes);
app.use("/streamer", streamerRoutes);

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(
    "mongodb+srv://deckerstrom:m8AyVbNTn1bwZTWv@burn-cluster-6fe6h.mongodb.net/user?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(8080);
    console.log("Listening on Port 8080")
  })
  .catch((err) => {
    console.log(err);
  });