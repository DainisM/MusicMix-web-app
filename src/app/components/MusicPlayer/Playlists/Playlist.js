import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Popup from "reactjs-popup";
import "./Playlist.css";

//API Authorization
const userid = localStorage.getItem("userId");
const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;
const formData = new FormData();

//InitialState objects
const initialState = {
  playlist_name: "",
  playlist_id: "",
  playlist_description: "",
  playlist_trackCount: "",
  tracks: [],
  imageUrl: "",
  showAudioPlayer: false,
  trackList: [],
  song_src: null,
  song_name: null,
  song_artist: null,
  song_id: null,
  open: false,
  newPlaylistName: "",
  newPlaylistDescription: "",
  newPlaylistImage: null,
  newPlaylistNameError: "",
  newPlaylistDescriptionError: "",
  newPlaylistImageError: "",
  playlistMsg: ""
};

class Playlist extends React.Component {
  //State set to initialState
  state = initialState;

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
    var index = this.state.trackList.findIndex(t => t == e.target.value);
    this.setState({
      song_src: e.target.value,
      song_name: this.state.tracks[index].name,
      song_artist: this.state.tracks[index].artist,
      song_id: this.state.tracks[index]._id,
      showAudioPlayer: true
    });
  };

  //Method for handling user inputs
  handleUserInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  //Method for handling image upload(selection)
  handleFileSelected = (e) => {
    formData.append("image", e.target.files[0], e.target.name);
    this.setState({ newPlaylistImage: e.target.value });
  }

  //Method for opening popup
  openPopup = () => {
    this.setState({ open: true });
  }

  //Method for closing popup
  closePopup = () => {
    this.setState({ open: false });
  }

  //Method for validating user inputs
  validate = () => {
    let newPlaylistNameError = "";
    let newPlaylistDescriptionError = "";

    if (this.state.newPlaylistName !== "") {
      if (
        this.state.newPlaylistName.length < 3 ||
        this.state.newPlaylistName.length > 20
      ) {
        newPlaylistNameError = "Name must be between 3 and 20 characters long!";
      }
    }
    else if (this.state.newPlaylistDescription.length > 150) {
      newPlaylistDescriptionError = "Description can be max 150 characters long!";
    }

    //If there is errors then set them to state and return false
    if (newPlaylistNameError || newPlaylistDescriptionError) {
      this.setState({
        newPlaylistNameError,
        newPlaylistDescriptionError,
      });
      return false;
    }

    //Else return true
    return true;
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
        song_artist: this.state.tracks[index + 1].artist,
        song_id: this.state.tracks[index + 1]._id
      });
    } else {
      this.setState({
        song_src: this.state.trackList[0],
        song_name: this.state.tracks[0].name,
        song_artist: this.state.tracks[0].artist,
        song_id: this.state.tracks[0]._id
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
        song_artist: this.state.tracks[index - 1].artist,
        song_id: this.state.tracks[index - 1]._id
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
          playlist_id: this.props.match.params.playlistId,
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
    this.setState({ state: initialState });
  }

  //Method for updating playlist
  editPlaylist = () => {
    //If name and/or description fields are emty then dont update their value
    if (this.state.newPlaylistName != "") {
      formData.append("name", this.state.newPlaylistName);
    }
    if (this.state.newPlaylistDescription != "") {
      formData.append("description", this.state.newPlaylistDescription);
    }
    //Fetch request header data
    const url = "http://api.music-mix.live/playlists/" + this.props.match.params.playlistId + "/users/" + userid + "";
    const request = new Request(url);
    const header = new Headers();
    header.append("Authorization", "Bearer " + usertoken);
    //Check for erors and if valid(no errors) start fetching
    const isValid = this.validate();
    if (isValid) {
      const myInit = {
        method: "PATCH",
        body: formData,
        headers: header
      };
      //Fetch response
      fetch(request, myInit)
        .then(response => {
          console.log(response);
          if (response.ok) {
            location.reload();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  //Method for deleting playlist
  deletePlaylist = () => {
    axios.delete(
      "http://api.music-mix.live/playlists/" + this.props.match.params.playlistId + "/users/" + userid,
      {
        headers: { Authorization: authString }
      }
    ).then(response => {
      if (response.status === 200) {
        this.props.history.push("/player");
        window.location.reload();
      }
    })
      .catch(error => {
        console.log("error " + error);
      });
  }

  //Method for deleteing/removing song from playlist
  removeFromPlaylist = e => {
    axios.delete(
      "http://api.music-mix.live/playlists/" + this.props.match.params.playlistId + "/users/" + userid + "/tracks",
      {
        headers: {
          Authorization: authString
        },
        data: {
          track_id: e.target.value
        }
      }
    ).then(res => {
      console.log(res);
    })
      .catch(error => {
        console.log("error " + error);
      });

    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  render() {
    return (
      <MusicPlayerLayout>
        <div className="Playlist">
          {/*Div for playlist image, name, description and track count*/}
          <div className="playlistInfo">
            <img
              className="newPlaylistImage"
              src={this.state.imageUrl}
              width="500px"
              height="width"
            />
            <p id="playlist_name">{this.state.playlist_name}</p>
            <p id="playlist_description">{this.state.playlist_description}</p>
            <Popup
              trigger={open => (
                <button id="playlist_updateBtn">...</button>
              )}
              position="left top"
              closeOnDocumentClick
            >
              <div className="container PlaylistEditPopup">
                <button className="playlist_buttons" onClick={this.openPopup}>Edit playlist</button>
                <button className="playlist_buttons" onClick={this.deletePlaylist}>Delete playlist</button>
              </div>
            </Popup>
            {/*Popup component*/}
            <Popup
              open={this.state.open}
              closeOnDocumentClick
              onClose={this.closePopup}
              modal
            >
              <div className="container EditPlaylistPopup">
                <a className="close" onClick={this.closePopup}>
                  &times;
            </a>
                <h2>Edit your playlist...</h2>
                <br />
                {/*Input and label for playlist name*/}
                <div className="row">
                  <label>Playlist new name:</label>
                  <input
                    type="text"
                    className="newPlaylistName"
                    name="newPlaylistName"
                    value={this.state.newPlaylistName}
                    onChange={this.handleUserInput}
                  />
                  <p className="playlistError">{this.state.newPlaylistNameError}</p>
                </div>
                <br />
                {/*Input and label for description*/}
                <div className="row">
                  <label>Playlist new description:</label>
                  <textarea
                    value={this.state.newPlaylistDescription}
                    onChange={this.handleUserInput}
                    className="newPlaylistDescription"
                    name="newPlaylistDescription"
                    cols={30}
                    rows={3}
                  ></textarea>
                  <p className="playlistError">
                    {this.state.newPlaylistDescriptionError}
                  </p>
                </div>
                <br />
                {/*File input for image*/}
                <div className="row">
                  <label>Playlist new image:</label>
                  <input
                    type="file"
                    className="newPlaylistImageSelect"
                    name="newPlaylistImage"
                    value={this.state.newPlaylistImage}
                    onChange={this.handleFileSelected}
                  />
                </div>
                <br />
                <div>
                  {/*Close popup button*/}
                  <button
                    className="EditPlaylistPopup-close"
                    onClick={this.closePopup}
                  >
                    Close
              </button>
                  {/*Save playlist button*/}
                  <button
                    className="EditPlaylistPopup-save"
                    onClick={this.editPlaylist}
                  >
                    Edit playlist
              </button>
                </div>
                <br />
                <p className="playlistMsg">{this.state.playlistMsg}</p>
              </div>
            </Popup>
            <br />
            <br />
            <p id="playlist_trackCount">
              {this.state.playlist_trackCount} Songs
            </p>
          </div>
          {/*Div for showing the list of all tracks for the playlist*/}
          <div className="playlistTracksList">
            {this.state.tracks.map(tracks => (
              <span className="row playlistTracks" key={tracks._id} style={{
                background: tracks._id === this.state.song_id ? "#005766" : "none"
              }}>
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
                  {/*Popup with functions to add to playlist or remove from playlist */}
                  <Popup
                    trigger={open => (
                      <button className="playlistTrackBtn">...</button>
                    )}
                    position="left top"
                    closeOnDocumentClick
                  >
                    <div className="container PlaylistEditPopup">
                      <button
                        value={tracks._id}
                        onClick={this.removeFromPlaylist}
                      >Remove from playlist</button>
                    </div>
                  </Popup>
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
