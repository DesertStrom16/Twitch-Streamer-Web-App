import { LOADING, LOGIN_USER, LOGOUT } from "../actions/users";

const storage = {
  id: localStorage.getItem("id"),
  login: localStorage.getItem("login"),  
  display_name: localStorage.getItem("display_name"),
  profile_image_url: localStorage.getItem("profile_image_url"),
  isLoading: localStorage.getItem("isLoading"),
  isAuth: localStorage.getItem("isAuth"),
};

const initialState = {
  id: storage.id,
  login: storage.login,
  display_name: storage.display_name,
  profile_image_url: storage.profile_image_url,
  isLoading: storage.isLoading === "true" ? true : false,
  isAuth: storage.isAuth === "true" ? true : false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      localStorage.setItem("isLoading", "true");
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER:
      localStorage.setItem("id", `${action.userId}`);
      localStorage.setItem("login", `${action.userLogin}`);
      localStorage.setItem("display_name", `${action.userDisplayName}`);
      localStorage.setItem("profile_image_url", `${action.userProfileImg}`);
      localStorage.setItem("isLoading", "false");
      localStorage.setItem("isAuth", "true");
      return {
        ...state,
        id: action.userId,
        login: action.userLogin,
        display_name: action.userDisplayName,
        profile_image_url: action.userProfileImg,
        isAuth: true,
        isLoading: false,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
