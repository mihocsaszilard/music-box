import React, { useEffect } from "react";
import "./App.scss";
import Login from "./components/Login/Login";
import { getAccessTokenFromUrl } from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useDataLayerValue } from "./data/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  //code runs only once the page is loaded
  useEffect(() => {
    const hash = getAccessTokenFromUrl();

    //reset the URL bar to NOT show the access token
    window.location.hash = "";
    const _token = hash["access_token"];

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("token", token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        dispatch({
          type: "SET_PLAYLISTS",
          discover_weekly: playlist,
        });
      });
    }
  }); //React Hook useEffect contains a call to 'setToken'. Without a list of dependencies.
  //Solved with adding [] at the end of the Hook - the fuction runs only once

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
