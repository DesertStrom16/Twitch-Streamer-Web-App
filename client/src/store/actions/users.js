export const LOADING = "LOADING";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT = "LOGOUT";

export const appLoading = () => {
  return {
    type: LOADING,
  };
};

export const loginUser = (id, login, display_name, profile_img_url) => {
  return {
    type: LOGIN_USER,
    userId: id,
    userLogin: login,
    userDisplayName: display_name,
    userProfileImg: profile_img_url,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

export function fetchPosts(twitch_code) {
  return function (dispatch) {
    let serverUrl = window.location.href.includes("localhost")
      ? process.env.REACT_APP_DEV_IP
      : process.env.REACT_APP_PROD_IP;

    return fetch(`${serverUrl}:8080/auth/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: twitch_code,
      }),
    })
      .then(
        (response) => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        (error) =>
          console.log("An error occurred on attempt to backend.", error)
      )
      .then((data) => {
        dispatch(
          loginUser(
            data.id,
            data.login,
            data.display_name,
            data.profile_image_url
          )
        );
      });
  };
}
