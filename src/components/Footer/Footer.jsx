import React from "react";
import "./Footer.scss";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Slider, Grid } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useDataLayerValue } from "../../data/DataLayer";
import { useSoundLayerValue } from "../../data/SoundLayer";

export default function Footer() {
  const [{ track, tracks }, dispatch] = useDataLayerValue();
  const [{ audio, playing, volume, repeat, shuffle }, soundDispatch] =
    useSoundLayerValue();

  const startPlaying = () => {
    soundDispatch({
      type: "SET_PLAYING",
      playing: true,
    });
    soundDispatch({
      type: "SET_VOLUME",
      volume: volume / 100,
    });
  };

  const stopPlaying = () => {
    soundDispatch({
      type: "SET_PLAYING",
      playing: false,
    });
  };

  const setRepeat = () => {
    if (!repeat && shuffle) {
      setShuffle();
    }
    soundDispatch({
      type: "SET_REPEAT",
      repeat: !repeat,
    });
  };

  const setShuffle = () => {
    if (!shuffle && repeat) {
      setRepeat();
    }
    soundDispatch({
      type: "SET_SHUFFLE",
      shuffle: !shuffle,
    });
  };

  const handleChange = (event, value) => {
    soundDispatch({
      type: "SET_VOLUME",
      volume: volume / 100,
    });
  };

  if (audio) {
    audio.onended = () => {
      if (shuffle) {
        while (true) {
          let randomTrackNumber = Math.floor(
            Math.random() * tracks.items.length
          );
          let randomTrack = tracks.items[randomTrackNumber].track;
          if (track !== randomTrack) {
            dispatch({
              type: "SET_TRACK",
              track: randomTrack,
            });

            let wasPlaying = playing;
            soundDispatch({
              type: "SET_PLAYING",
              playing: false,
            });

            let audio = new Audio(randomTrack.preview_url);
            audio.loop = repeat;
            soundDispatch({
              type: "SET_AUDIO",
              audio: audio,
            });

            if (wasPlaying) {
              soundDispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            }

            document.title = `${randomTrack.name} - ${randomTrack.artists
              .map((artist) => artist.name)
              .join(", ")}`;
            break;
          }
        }
      }
      if (!shuffle && !repeat) {
        soundDispatch({
          type: "SET_PLAYING",
          playing: false,
        });
      }
    };
  }

  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src={track ? track.album.images[0].url : ""}
          alt=""
          className="footer_albumLogo"
        />
        <div className="footer_songInfo">
          <h4>{track ? track.name : "No song selected"}</h4>
          <p>
            {track
              ? track.artists.map((artist) => artist.name).join(", ")
              : null}
          </p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon
          className={shuffle ? "footer_green" : "footer_icon"}
          onClick={track ? setShuffle : null}
        />
        <SkipPreviousIcon className="footer_icon" />
        {playing ? (
          <PauseCircleFilledIcon
            fontSize="large"
            className="footer_icon"
            onClick={track ? stopPlaying : null}
          />
        ) : (
          <PlayCircleFilledIcon
            fontSize="large"
            className="footer_icon"
            onClick={track ? startPlaying : null}
          />
        )}
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon
          className={repeat ? "footer_green" : "footer_icon"}
          onClick={track ? setRepeat : null}
        />
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
            <Slider
              aria-labelledby="discrete-slider"
              valueLabelDisplay="off"
              onChange={handleChange}
              min={0}
              max={100}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
