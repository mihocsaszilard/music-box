import React from "react";
import "./Body.scss";
import Header from "../Header/Header";
import { useDataLayerValue } from "../../data/DataLayer";
import { PlayCircleFilled } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import SongRow from "../SongRow/SongRow";

export default function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>Playlist</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilled className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}
