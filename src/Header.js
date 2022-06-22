import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <h2>I am header</h2>
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img 
      className="header_logo"
      src='./Tinder_logo_PNG3.png'
      alt=""
      />
    </div>
  );
}

export default Header;
