import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import VideoPreview from "./VideoPreview";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function VideoManager() {
  const classes = useStyles();
  const [openPreview, setOpenPreview] = useState(true);
  return (
    <div className={classes.root}>
      <Navbar title={"Video Manager"} />
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        style={{ marginTop: 10, marginBottom: 10 }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setOpenPreview(!openPreview);
          }}
        >
          Add New Video
        </Button>
      </Box>
      {openPreview ? (
        <Box display="flex" width="100%" justifyContent="center">
          <VideoPreview />
        </Box>
      ) : null}
    </div>
  );
}
