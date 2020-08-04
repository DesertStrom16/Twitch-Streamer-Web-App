import React from "react";
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
  },
}));

export default function VideoItem() {
  const classes = useStyles();
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
        Thumbnail
      </Box>
      <Box display="flex" flexDirection="column">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginBottom: 7 }}
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
