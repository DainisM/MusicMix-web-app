import React from "react";
import MusicplayerSideNav from "../../components/MusicPlayer/MusicplayerSideNav";
import AudioPlayer from "../../components/MusicPlayer/AudioPlayer";

const MusicPlayerLayout = ({ children }) => (
  <div>
    <div className="container-fluid musicPlayerMain">
      <div className="row">
        <div>
          <MusicplayerSideNav />
        </div>
        <div>{children}</div>
      </div>
      <div className="row">
        <AudioPlayer />
      </div>
    </div>
  </div>
);

export default MusicPlayerLayout;
