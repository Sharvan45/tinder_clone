import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";

const buttonProps = { fontSize: "large", className: "header_icon" };
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon {...buttonProps} />
      </IconButton>
      <img
        className="header_logo"
        src="./Tinder_logo_PNG3.png"
        alt="not available"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
