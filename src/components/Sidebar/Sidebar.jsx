import React from "react";
import "./Sidebar.scss";
import SidebarOptions from "./SidebarOptions";
import { HomeOutlined } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { LibraryMusic } from "@mui/icons-material";
import { useDataLayerValue } from "../../data/DataLayer";

export default function Sidebar() {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />

      <SidebarOptions title="Home" Icon={HomeOutlined} />
      <SidebarOptions title="Search" Icon={Search} />
      <SidebarOptions title="Your library" Icon={LibraryMusic} />
      <br />
      <strong className="sidebar_title">Playlist</strong>
      <hr />
      {playlists?.item?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
}
