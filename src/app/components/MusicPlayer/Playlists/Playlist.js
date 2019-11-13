import React from "react";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";

class Playlist extends React.Component {
  render() {
    return (
      <MusicPlayerLayout>
        <div className="Playlist">
          <h1>Playlist</h1>
          <p>{this.props.match.params.playlistId}</p>
        </div>
      </MusicPlayerLayout>
    );
  }
}

export default Playlist;
