import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, appLoading } from "../store/actions/users";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.user);

  let redirect = null;
  if (!userRedux.isAuth) {
    redirect = <Redirect to="/" />;
  }

  let redirectUrl = window.location.href.includes("localhost")
    ? process.env.REACT_APP_DEV_IP + ":3000"
    : process.env.REACT_APP_PROD_IP;

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      {redirect}
      {userRedux.isAuth ? (
        // Authorized is true
        <List>
          {["Home", "Video Manager", "FAQ"].map((text, index) => (
            <ListItem
              button
              component="a"
              key={text}
              href={index === 0 ? "/home" : index === 1 ? "/video-manager" : "/faq"}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <HelpIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      ) : (
        // Authorized is false
        <List>
          {["Home", "How It Works"].map((text, index) => (
            <ListItem
              button
              component="a"
              key={text}
              href={index === 0 ? "/" : "/how-it-works"}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <HomeIcon />
                ) : index === 1 ? (
                  <VideogameAssetIcon />
                ) : (
                  <HelpIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      )}

      <Divider />
      {userRedux.isAuth ? (
        // Authorized is true
        <List>
          {["Logout"].map((text) => (
            <ListItem
              button
              key={text}
              onClick={() => {
                dispatch(logoutUser());
              }}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      ) : (
        // Authorized is false
        <List>
          {["Login"].map((text) => (
            <ListItem
              button
              key={text}
              component="a"
              href={`https://id.twitch.tv/oauth2/authorize?client_id=rggrr0wfq2zb6m42yvki7hzi71x7jn&redirect_uri=${redirectUrl}/register/&response_type=code&force_verify=true`}
              onClick={() => {
                dispatch(appLoading());
              }}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );

  return (
    <Drawer
      anchor={"left"}
      open={props.drawerOpen}
      onClose={props.toggleDrawer(false)}
    >
      {list("left")}
    </Drawer>
  );
}
