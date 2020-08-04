import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function HowItWorks() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar title={"How It Works"} />
    </div>
  );
}
