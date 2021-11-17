import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import { DataLayer } from "./data/DataLayer";
import reducer, { initialState } from "./data/reducer";
import { SoundLayer } from "./data/SoundLayer";
import soundReducer, { soundInitialState } from "./data/SoundReducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <SoundLayer initialState={soundInitialState} reducer={soundReducer}>
        <App />
      </SoundLayer>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
