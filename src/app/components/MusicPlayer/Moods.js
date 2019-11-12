import React from "react";
import MusicPlayerLayout from "../../pages/Layouts/MusicPlayerLayout";
import MusicplayerTopNav from "./MusicplayerTopNav";

const Moods = () => {
  return (
    <MusicPlayerLayout>
      <div className="Moods">
        <MusicplayerTopNav />
        <h1>Moods</h1>
      </div>
    </MusicPlayerLayout>
  );
};

export default Moods;
