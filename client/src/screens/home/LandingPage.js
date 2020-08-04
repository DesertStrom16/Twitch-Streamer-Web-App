import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar title={"Welcome to Burn TV"} />
    </div>
  );
}
