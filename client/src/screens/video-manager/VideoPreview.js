import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import VideoItem from "../../components/VideoItem";
import Button from "@material-ui/core/Button";
import TwitchEmbed from "../../components/TwitchEmbed";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../../store/actions/videos";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "1150px",
    height: "625px",
    background: "#BBBBBB",
    borderRadius: "6px",
    boxSizing: "border-box",
    padding: "15px 0",
  },
}));

export default function VideoPreview() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.user);
  const videoRedux = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchVideos(userRedux.id));
  }, [dispatch, userRedux.id]);

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        border="3px solid #000000"
        width="26%"
        borderRadius={10}
        boxSizing="border-box"
        padding="0px 5px"
        overflow="auto"
      >
        {/* {videoRedux.video
          ? videoRedux.video.data.map((vid, index) => console.log(vid, index))
          : null} */}

        {videoRedux.video
          ? videoRedux.video.data.map((vid, index) => (
              <VideoItem key={Math.random()} videoData={vid} />
            ))
          : null}
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
          height="445px"
          borderRadius={5}
          border="4px solid #EEEEEE"
          overflow="hidden"
        >
          {videoRedux.preview ? (
            <TwitchEmbed id={videoRedux.preview.id} />
          ) : (
            "Click a Video to Preview!"
          )}
        </Box>
        {videoRedux.preview ? (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            paddingLeft={2}
            height={100}
            marginTop={1}
          >
            <h3 style={{margin: 0, color: "#3f51b5"}}>{videoRedux.preview.title}</h3>
            <h4 style={{margin: 0}}>{videoRedux.preview.duration}</h4>
            <p style={{margin: 0}}>{videoRedux.preview.description}</p>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
