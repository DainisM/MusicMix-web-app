import React from "react";
import Playlists from "../Playlists/PlaylistList";

const MusicplayerSideNav = () => {
  return (
    <aside className="musicPlayerSideMenu">
      <div className="MusicplayerLogo">
        <a href="/player">
          <img
            src={require("../../../images/MusicMix_logo.png")}
            alt="MusicMix Logo"
          />
        </a>
      </div>
      <ul>
        <li>
          <a href="/player">Home</a>
        </li>
        <li>
          <a href="/player/search">Search</a>
        </li>
      </ul>
      <div
        style={{
          display: localStorage.getItem("userId") ? "block" : "none"
        }}
      >
        <Playlists />
      </div>
      <div
        className="MusicplayerProfileInfo"
        style={{
          display: localStorage.getItem("userId") ? "block" : "none"
        }}
      >
        <a href="/profile" className="profilelink-musicplayer">
          <img
            className="profileImg-musicplayer"
            src={require("../../../images/UserIcon.png")}
            alt="Profile icon"
            width="25"
            height="25"
          />
          {localStorage.getItem("userName")}
        </a>
        <br />
        <button
          className="logoutbutton-musicplayer"
          onClick={() => window.localStorage.clear()}
        >
          Log out
        </button>
      </div>
      <a
        style={{
          display: localStorage.getItem("userId") ? "none" : "block"
        }}
        href="/login"
      >
        <button className="MusicPlayerLoginLink" type="button">
          Login
        </button>
      </a>
    </aside>
  );
};

export default MusicplayerSideNav;
