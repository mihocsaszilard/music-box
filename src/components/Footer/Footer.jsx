import React from "react";
import "./Footer.scss";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Slider } from "@mui/material";
import { Grid } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
          className="footer_albumLogo"
        />
        <div className="footer_songInfo">
          <h4>My favorites</h4>
          <p>Atharva</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleFilledIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
