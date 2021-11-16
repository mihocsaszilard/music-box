import React from "react";
import { Search } from "@mui/icons-material";
import "./Header.scss";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "../../data/DataLayer";

export default function Header() {
  const [{ user }] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input placeholder="Search for Artist, Songs, or Albums" type="text" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
