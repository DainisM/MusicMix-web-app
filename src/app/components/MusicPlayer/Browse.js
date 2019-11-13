import React from "react";
import MusicPlayerLayout from "../../pages/Layouts/MusicPlayerLayout";
import MusicplayerTopNav from "./Nav/MusicplayerTopNav";

const Browse = () => {
  return (
    <MusicPlayerLayout>
      <div className="Browse">
        <MusicplayerTopNav />
        <h1>Browse</h1>
      </div>
    </MusicPlayerLayout>
  );
};

export default Browse;
