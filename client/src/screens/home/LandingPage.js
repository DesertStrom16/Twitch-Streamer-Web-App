import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar";
import Button from "@material-ui/core/Button";
import Modal from "../../components/Modal";
import LoginTwitch from "./LoginTwitch";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar title={"Burn TV"} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={2}
      >
        <h1>Welcome to Burn TV</h1>
        <p style={{ width: "50%", textAlign: "center", marginBottom: 20 }}>
          This is a demo application made by Decker Strom, for Twitch streamers
          to watch all of their favorite clips! Please sign-in to access the
          Video Manager screen and begin watching your clips!
        </p>
        <Box display="flex">
          <Button variant="contained" color="secondary" href="/how-it-works">
            How It Works
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 15, padding: "2px 5px" }}
          >
            <Modal title={"Login with Twitch"} content={<LoginTwitch />} />
          </Button>
        </Box>
      </Box>
    </div>
  );
}
