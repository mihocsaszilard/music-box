import React from "react";
import "./SongRow.scss";
import { useDataLayerValue } from "../../data/DataLayer";
import { useSoundLayerValue } from "../../data/SoundLayer";

export default function SongRow({ track }) {
  const [{}, dispatch] = useDataLayerValue();
  const [{ playing, repeat }, soundDispatch] = useSoundLayerValue();

  const startPlaying = () => {
    soundDispatch({
      type: "SET_PLAYING",
      playing: true,
    });
  };

  const stopPlaying = () => {
    soundDispatch({
      type: "SET_PLAYING",
      playing: false,
    });
  };

  const changeTrack = (e, track) => {
    dispatch({
      type: "SET_TRACK",
      track: track,
    });

    let wasPlaying = playing;
    soundDispatch({
      type: "SET_PLAYING",
      playing: false,
    });

    let audio = new Audio(track.preview_url);
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
    document.title = `${track.name} - ${track.artists
      .map((artist) => artist.name)
      .join(", ")}`;
  };

  return (
    <div
      className="songRow"
      onClick={(e) => {
        changeTrack(e, track);
        startPlaying();
      }}
    >
      <img className="songRow_album" src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(", ")} </p>
        <p>{track.album.name} </p>
      </div>
    </div>
  );
}
