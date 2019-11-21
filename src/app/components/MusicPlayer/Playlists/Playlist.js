import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import "./Playlist.css";

//API Authorization
const userid = localStorage.getItem("userId");
const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;

//InitialState objects
const initalState = {
  playlist_name: "",
  playlist_description: "",
  playlist_trackCount: "",
  tracks: [],
  imageUrl: "",
  showAudioPlayer: false,
  trackList: [],
  song_src: null,
  song_name: null,
  song_artist: null
};

class Playlist extends React.Component {
  //State set to initialState
  state = initalState;

  //Method for calling fetch method (Initialazed on render)
  componentDidMount = () => {
    this.renderPlaylist();
  };

  //Method for re-rendering and calling fetch method when props changed
  componentWillUpdate = nextProps => {
    if (
      nextProps.match.params.playlistId != this.props.match.params.playlistId
    ) {
      location.reload();
      this.renderPlaylist();
    }
  };

  //Method for handling user click and setting song url to state of the clicked div(which holds url)
  handleClick = e => {
    this.setState({
      song_src: e.target.value,
      song_name: e.target.name,
      song_artist: e.target.artist,
      showAudioPlayer: true
    });
  };

  //Method passed to audioPlayer which tells what to do when song is done
  onSongDone() {
    this.onPlayerNext();
  }

  //Method passed to audioPlayer which finds current song index in array of all song of the playlist
  // and sets next index song url to song_src state
  onPlayerNext() {
    var index = this.state.trackList.findIndex(t => t == this.state.song_src);
    if (this.state.trackList.length > index + 1) {
      this.setState({
        song_src: this.state.trackList[index + 1],
        song_name: this.state.tracks[index + 1].name,
        song_artist: this.state.tracks[index + 1].artist
      });
    } else {
      this.setState({
        song_src: this.state.trackList[0]
      });
    }
  }

  //Method passed to audioPlayer hich finds current song index in array of all songs and then sets song_src url to previous index url
  onPlayerPrev() {
    var index = this.state.trackList.findIndex(t => t == this.state.song_src);
    if (index - 1 < 0) {
      console.log("No more songs");
      return false;
    } else {
      this.setState({
        song_src: this.state.trackList[index - 1],
        song_name: this.state.tracks[index - 1].name,
        song_artist: this.state.tracks[index - 1].artist
      });
      return true;
    }
  }

  //Method call for audioPlayer component and passes props
  getAudioComponent = () => {
    if (this.state.showAudioPlayer) {
      return (
        <AudioPlayer
          src={this.state.song_src}
          name={this.state.song_name}
          artist={this.state.song_artist}
          onDone={this.onSongDone.bind(this)}
          onNext={this.onPlayerNext.bind(this)}
          onPrev={this.onPlayerPrev.bind(this)}
        />
      );
    } else {
      return null;
    }
  };

  //Method for fetching data
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
        //If response is ok then set data to state
        this.setState({
          imageUrl: res.data.response.playlist[0].image,
          playlist_name: res.data.response.playlist[0].name,
          playlist_description: res.data.response.playlist[0].description,
          playlist_trackCount: res.data.response.playlist[0].trackCount,
          tracks: res.data.response.playlist[0].tracks,
          trackList: res.data.response.playlist[0].tracks.map(
            tracks => "http://api.music-mix.live" + tracks.url.split("..")[1]
          )
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
    this.setState({ state: initalState });
  }

  render() {
    return (
      <MusicPlayerLayout>
        <div className="Playlist">
          {/*Div for playlist image, name, description and track count*/}
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
          {/*Div for showing the list of all tracks for the playlist*/}
          <div className="playlistTracksList">
            {this.state.tracks.map(tracks => (
              <span className="row playlistTracks" key={tracks._id}>
                <span className="col1">
                  <button
                    className="playlistTrackIcon"
                    value={
                      "http://api.music-mix.live" + tracks.url.split("..")[1]
                    }
                    onClick={this.handleClick}
                  ></button>
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
                    {/*Links to artist component(page)*/}
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
          {this.getAudioComponent()}
        </div>
      </MusicPlayerLayout>
    );
  }
}

export default Playlist;
