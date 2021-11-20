export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null,
  track: null,
  tracks: null,
  current_playlist: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.token,
      };
    }
    case "SET_PLAYLISTS": {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case "SET_CURRENT_PLAYLIST": {
      let currentPlaylist = null;
      state.playlists.items.forEach((playlist) => {
        if (playlist.id === action.id) {
          currentPlaylist = playlist;
        }
      });
      return {
        ...state,
        current_playlist: currentPlaylist,
      };
    }
    case "SET_TRACKS": {
      return {
        ...state,
        tracks: action.tracks,
      };
    }
    case "SET_TRACK": {
      return {
        ...state,
        track: action.track,
      };
    }
    default:
      return state;
  }
};

export default reducer;
