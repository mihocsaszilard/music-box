import React, { useState } from "react";
import "./mainPage.scss";

function MainPage(props) {
  const [push, handlePush] = useState("logout");

  return (
    <div id="MainPage">
      <h3>Logged in as {props.user.name}</h3>
      <button onClick={() => handlePush("login")}>{push}</button>
    </div>
  );
}

export default MainPage;
