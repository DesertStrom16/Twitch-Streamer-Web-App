import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import VideoItem from "../../components/VideoItem";
import Button from "@material-ui/core/Button";
import TwitchEmbed from "../../components/TwitchEmbed";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "1150px",
    height: "700px",
    background: "#BBBBBB",
    borderRadius: "6px",
    boxSizing: "border-box",
    padding: "15px 0",
  },
}));

export default function VideoPreview() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        border="3px solid #000000"
        width="26%"
        borderRadius={10}
        boxSizing="border-box"
        padding="10px 5px"
      >
        <VideoItem />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="fit-content"
        height="100%"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="800px"
          height="450px"
          borderRadius={10}
          border="4px solid #EEEEEE"
          overflow="hidden"
        >
          <TwitchEmbed />
        </Box>
        <Box
          display="flex"
          flexGrow="1"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="secondary"
            style={{ marginRight: 15 }}
          >
            Back
          </Button>
          <Button variant="contained" color="primary">
            Proceed With X Videos
          </Button>
        </Box>
      </Box>
    </div>
  );
}
