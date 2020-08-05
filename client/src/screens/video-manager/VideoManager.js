import React from "react";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import VideoPreview from "./VideoPreview";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function VideoManager() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar title={"Video Manager"} />
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        style={{ marginTop: 15, marginBottom: 10 }}
      ></Box>

      <Box display="flex" width="100%" justifyContent="center">
        <VideoPreview />
      </Box>
    </div>
  );
}
