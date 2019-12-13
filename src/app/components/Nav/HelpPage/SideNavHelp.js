import React from "react";

//Component with links to divs displayed at side
const SideNavHelp = () => {
  return (
    <aside className="menu">
      <ul className="mainItems">
        <li>
          <a href="#help">Intro</a>
        </li>
        <li>
          <a href="#account">Account</a>
          <ul className="submenu">
            <li><a href="#signup">Signup</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </li>
        <li>
          <a href="#profile">Profile</a>
          <ul className="submenu">
            <li><a href="#see-profile">See profile</a></li>
            <li><a href="#edit-profile">Edit profile</a></li>
            <li><a href="#change-password">Change password</a></li>
          </ul>
        </li>
        <li>
          <a href="#music-player">Music player</a>
          <ul className="submenuHelp">
            <li><a href="#genre">Choose a music genre</a></li>
            <li><a href="#mood">Choose a mood playlist</a></li>
            <li><a href="#play-song">Play a song</a></li>
            <li><a href="#audio-player">Audio player controls</a></li>
            <li><a href="#playlists">User playlists</a></li>
            <li><a href="#create-playlist">Create playlist</a></li>
            <li><a href="#add-songs">Add songs to playlist</a></li>
            <li><a href="#remove-songs">Remove songs from playlist</a></li>
            <li><a href="#edit-playlist">Edit playlist</a></li>
            <li><a href="#delete-playlist">Delete playlist</a></li>
            <li><a href="#search">Search</a></li>
            <li><a href="#show-artist">Show artist info and tracks</a></li>
            <li><a href="#go-to-profile">Go to profile</a></li>
            <li><a href="#go-to-home">Go to home page</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default SideNavHelp;