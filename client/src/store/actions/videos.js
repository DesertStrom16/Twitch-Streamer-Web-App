export const GET_VIDEOS = "GET_VIDEOS";
export const PREVIEW_VIDEO = "PREVIEW_VIDEO";

export const getVideos = (data) => {
  return {
    type: GET_VIDEOS,
    videoData: data,
  };
};

export const previewVideo = (data) => {
  return {
    type: PREVIEW_VIDEO,
    data: data
  }
}

export function fetchVideos(userId) {
  return function (dispatch) {
    let serverUrl = window.location.href.includes("localhost")
      ? process.env.REACT_APP_DEV_IP
      : process.env.REACT_APP_PROD_IP;
      console.log(serverUrl)
    return fetch(`${serverUrl}:8080/streamer/new-video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    })
      .then(
        (response) => response.json(),
        (error) =>
          console.log("An error occurred on attempt to backend.", error)
      )
      .then((res) => {
        dispatch(getVideos(res.data));
      });
  };
}
