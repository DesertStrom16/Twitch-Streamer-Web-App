import { GET_VIDEOS, PREVIEW_VIDEO } from "../actions/videos";

const initialState = {
  video: null,
  preview: null
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        video: {
          ...state.video,
          data: action.videoData,
        },
      };
      case PREVIEW_VIDEO:
        return {
          ...state,
          preview: action.data
        }
    default:
      return state;
  }
};

export default videoReducer;