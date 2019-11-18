import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import "./Playlist.css";

const userid = localStorage.getItem("userId");
const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;

const initalState = {
  playlist_name: "",
  playlist_description: "",
  playlist_trackCount: "",
  tracks: [],
  imageUrl: ""
};

class Playlist extends React.Component {
  state = initalState;

  componentDidMount = () => {
    this.renderPlaylist();
  };

  componentWillUpdate = nextProps => {
    if (
      nextProps.match.params.playlistId != this.props.match.params.playlistId
    ) {
      location.reload();
      this.renderPlaylist();
    }
  };

  renderPlaylist() {
    axios
      .get(
        "http://api.music-mix.live/playlists/" +
          this.props.match.params.playlistId +
          "/users/" +
          userid +
          "",
        { headers: { Authorization: authString } }
      )
      .then(res => {
        this.setState({
          imageUrl: res.data.response.playlist[0].image,
          playlist_name: res.data.response.playlist[0].name,
          playlist_description: res.data.response.playlist[0].description,
          playlist_trackCount: res.data.response.playlist[0].trackCount,
          tracks: res.data.response.playlist[0].tracks
        });
        this.setState({ playlist: res.data.response.playlist[0] });
        this.setState({ tracks: res.data.response.playlist[0].tracks });
      })
      .catch(error => {
        console.log("error " + error);
      });
    this.setState({ state: initalState });
  }

  render() {
    console.log(this.state.tracks);
    return (
      <MusicPlayerLayout>
        <div className="Playlist">
          <div className="playlistInfo">
            <img
              className="playlistImage"
              src={this.state.imageUrl}
              width="500px"
              height="width"
            />
            <p id="playlist_name">{this.state.playlist_name}</p>
            <p id="playlist_description">{this.state.playlist_description}</p>
            <p id="playlist_trackCount">
              {this.state.playlist_trackCount} Songs
            </p>
          </div>
          <div className="playlistTracksList">
            {this.state.tracks.map(tracks => (
              <span className="row playlistTracks" key={tracks._id}>
                <span className="col1">
                  <button></button>
                </span>
                <span className="col2">
                  <p className="playlistTrackName">{tracks.name}</p>
                  <Link
                    className="playlistTrackArtist"
                    to={{
                      pathname: "/player/artist/" + tracks.artist_id[0]
                    }}
                    params={{ artistId: tracks.artist_id[0] }}
                  >
                    {tracks.artist[0]}
                  </Link>
                  <Link
                    className="playlistTrackArtist"
                    to={{
                      pathname: "/player/artist/" + tracks.artist_id[1]
                    }}
                    params={{ artistId: tracks.artist_id[1] }}
                  >
                    &#160;{tracks.artist[1]}
                  </Link>
                  <Link
                    className="playlistTrackArtist"
                    to={{
                      pathname: "/player/artist/" + tracks.artist_id[2]
                    }}
                    params={{ artistId: tracks.artist_id[2] }}
                  >
                    &#160;{tracks.artist[2]}
                  </Link>
                </span>
                <span className="col3">
                  {tracks.explicit === true ? (
                    <label className="playlistTrackLabel">EXPLICIT</label>
                  ) : null}
                </span>
                <span className="col4">
                  <button className="playlistTrackBtn">...</button>
                </span>
              </span>
            ))}
          </div>
        </div>
      </MusicPlayerLayout>
    );
  }
}

export default Playlist;
