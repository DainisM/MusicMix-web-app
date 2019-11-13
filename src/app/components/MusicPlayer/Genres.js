import React from "react";
import MusicPlayerLayout from "../../pages/Layouts/MusicPlayerLayout";
import MusicplayerTopNav from "./Nav/MusicplayerTopNav";

const Genres = () => {
  return (
    <MusicPlayerLayout>
      <div className="Genres">
        <MusicplayerTopNav />
        <h1>Genres</h1>
      </div>
    </MusicPlayerLayout>
  );
};

export default Genres;
