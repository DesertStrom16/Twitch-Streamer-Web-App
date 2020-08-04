import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./screens/home/Home";
import LoadingPage from "./screens/home/LoadingPage";
import LandingPage from "./screens/home/LandingPage";
import VideoManager from "./screens/video-manager/VideoManager";

export default function Routes() {
  const userRedux = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Switch>
        {/* Main path, if authorized "/" redirects to "/home", otherwise LandingPage is rendered */}
        <Route path="/" exact>
          {userRedux.isAuth ? <Redirect to="/home" /> : <LandingPage />}
        </Route>
        {/* Redirect if "/home" is requested but user is not authorized */}
        <Route path="/home" exact>
          {userRedux.isAuth ? <Home /> : <Redirect to="/" />}
        </Route>
        {/* Redirect if "/video-manager" is requested but user is not authorized */}
        <Route path="/video-manager" exact>
          {userRedux.isAuth ? <VideoManager /> : <Redirect to="/" />}
        </Route>
        {/* Register path, if loading is true then LoadingPage is rendered, otherwise user is redirected to "/" */}
        <Route path="/register" exact>
          {userRedux.isLoading ? <LoadingPage /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
