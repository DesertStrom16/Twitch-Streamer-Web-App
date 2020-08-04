import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/actions/users";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function LoadingPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    // Parse twitch code from URL string
    let url = window.location.href;

    if (url.includes("code")) {
      let codeLocation = url.indexOf("code");
      let partialCode = url.substring(codeLocation + 5);
      let scopeLocation = partialCode.indexOf("&");
      let code = partialCode.substring(0, scopeLocation);

      // Send code to Backend
      dispatch(fetchPosts(code));
    }
  }, [dispatch]);

  // Redirect if user is authorized
  let redirect = null;
  if (isAuth) {
    redirect = <Redirect to="/home" />;
  }
  return (
    <div className={classes.root}>
      {redirect}
      <Box display="flex" flexDirection="column" alignItems="center">
        <h3 style={{ margin: 0, marginBottom: 50 }}>
          Hang tight, we're redirecting you...
        </h3>
        <CircularProgress color="secondary" />
      </Box>
    </div>
  );
}
