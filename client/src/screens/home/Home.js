import React from "react";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar";
import TwitchEmbed from "../../components/TwitchEmbed";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Home = () => {
  const classes = useStyles();
  const userRedux = useSelector((state) => state.user);

  return (
    <div className={classes.root}>
      <Navbar title={"Home"} />
      <Box display="flex" alignItems="center" flexDirection="column">
        <h3 style={{ margin: 0, marginTop: 25, marginBottom: 10 }}>Welcome: </h3>
        <h2 style={{ margin: 0 }}>{userRedux.display_name}</h2>
        <TwitchEmbed />
      </Box>
    </div>
  );
};

export default Home;
