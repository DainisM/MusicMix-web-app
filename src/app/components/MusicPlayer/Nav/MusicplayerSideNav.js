import React from "react";
import Playlists from "../Playlists/PlaylistList";

const MusicplayerSideNav = () => {
  return (
    <aside className="musicPlayerSideMenu">
      {/*Div with logom and 2 links to home and search componennts*/}
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
      {/*Calling Playlist component if there is userId in localStorage*/}
      <div
        style={{
          display: localStorage.getItem("userId") ? "block" : "none"
        }}
      >
        <Playlists />
      </div>
      {/*Div with link to user profile, logout and login*/}
      <div
        /*If there is userId in localStorage then show profile icon and username (Link to profile page)*/
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
        {/*If there is no userId in localStorage this "Logout" button will be shown*/}
        <button
          className="logoutbutton-musicplayer"
          onClick={() => {
            window.localStorage.clear(), location.reload();
          }}
        >
          Log out
        </button>
      </div>
      {/*If there is userId in localStorage this logout button wil be shown*/}
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
