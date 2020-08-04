import React from "react";
import { useDispatch } from "react-redux";
import { appLoading } from "../../store/actions/users";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function LoginTwitch() {
  const dispatch = useDispatch();

  let redirectUrl = window.location.href.includes("localhost")
    ? process.env.REACT_APP_DEV_IP + ":3000"
    : process.env.REACT_APP_PROD_IP;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width={300}>
      <h3 style={{ marginBottom: 15, marginTop: 10 }}>Login With Twitch</h3>
      <p style={{ margin: 0, marginBottom: 20, textAlign: "center" }}>
        We use the Twitch API to be able to fetch all of your videos and profile
        information. By logging in, you are only granting us access to your
        public Twitch account information, and nothing else.
      </p>
      <Button
        variant="contained"
        color="secondary"
        href={`https://id.twitch.tv/oauth2/authorize?client_id=rggrr0wfq2zb6m42yvki7hzi71x7jn&redirect_uri=${redirectUrl}/register/&response_type=code&force_verify=true`}
        onClick={() => {
          dispatch(appLoading());
        }}
      >
        Login
      </Button>
    </Box>
  );
}
