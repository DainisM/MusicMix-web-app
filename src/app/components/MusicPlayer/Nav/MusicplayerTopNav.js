import React from "react";
import "./MusicplayerTopNav.css";

const MusicplayerTopNav = () => {
  return (
    <div className="row MusicplayerTopNav">
      <a href="/player">Featured</a>
      <a href="/player/genres">Genres</a>
      <a href="/player/moods">Moods</a>
    </div>
  );
};

export default MusicplayerTopNav;
