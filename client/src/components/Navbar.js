import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";

import Modal from "./Modal";
import Drawer from "./Drawer";
import LoginTwitch from "../screens/home/LoginTwitch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  const userRedux = useSelector((state) => state.user);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          {userRedux.isAuth ? (
            <Modal
              title={
                <Avatar
                  alt={`${userRedux.display_name}`}
                  src={`${userRedux.profile_image_url}`}
                />
              }
              content={<LoginTwitch />}
            />
          ) : (
            <Modal title={"Login with Twitch"} content={<LoginTwitch />} />
          )}
        </Toolbar>
        <Drawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      </AppBar>
    </div>
  );
};

export default Navbar;
