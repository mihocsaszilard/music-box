import React from "react";
import { useDataLayerValue } from "../../data/DataLayer";
import "./SidebarOptions.scss";

export default function SidebarOptions({ spotify, id, title, Icon }) {
  const [{}, dispatch] = useDataLayerValue();

  const changePlaylist = (id, e) => {
    dispatch({
      type: "SET_CURRENT_PLAYLIST",
      id: id,
    });

    spotify.getPlaylistTracks(id).then((resp) => {
      dispatch({
        type: "SET_TRACKS",
        tracks: resp,
      });
    });
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h4>{title} </h4>
      ) : (
        <p onClick={(e) => changePlaylist(id, e)}> {title}</p>
      )}
    </div>
  );
}
