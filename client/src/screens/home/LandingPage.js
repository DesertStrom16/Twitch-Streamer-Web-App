import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar";

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
      <Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>
        <h1>Welcome to Burn TV</h1>
        <p style={{width: "50%", textAlign: "center"}}>
          This is a demo application made by Decker Strom, for Twitch streamers
          to watch all of their favorite clips! Please sign-in to access the
          Video Manager screen and begin watching your clips!
        </p>
      </Box>
    </div>
  );
}
