import React from "react";
import { useDispatch } from "react-redux";
import { previewVideo } from "../store/actions/videos";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    border: "3px solid #EEEEEE",
    borderRadius: 10,
    width: "100%",
    height: 110,
    boxSizing: "border-box",
    marginTop: 10,
  },
  img: {},
}));

export default function VideoItem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={160}
        height={90}
        boxSizing="border-box"
        border="1px solid black"
      >
        <img
          alt="video thumbnail"
          src={`${props.videoData.thumbnail_url.replace(
            "%{width}x%{height}",
            "160x90"
          )}`}
          className={classes.img}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginBottom: 7 }}
          onClick={() => dispatch(previewVideo(props.videoData.id))}
        >
          Preview
        </Button>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </Box>
    </div>
  );
}
