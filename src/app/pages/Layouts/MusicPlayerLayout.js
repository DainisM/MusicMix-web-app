import React from "react";
import MusicplayerSideNav from "../../components/MusicPlayer/Nav/MusicplayerSideNav";

const MusicPlayerLayout = ({ children }) => (
  <div>
    <div className="container-fluid musicPlayerMain">
      <div className="row">
        <div>
          <MusicplayerSideNav />
        </div>
        <div>{children}</div>
      </div>
      <div className="row"></div>
    </div>
  </div>
);

export default MusicPlayerLayout;