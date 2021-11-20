// the URL where to authenticate using Spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";
//states where to take back the user if the Spotify login was successful
// const redirectUrl = "https://music-box-f6001.web.app/";

//development
const redirectUrl = "http://localhost:3000/";
//the Client ID provided by the Spotify Web API
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

// permissions which need to ask Spotify for
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//the final URL which needs to be called in order to authorize an user for our Spotify Clone app
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

//extract the Access Token from the URL
export const getAccessTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
