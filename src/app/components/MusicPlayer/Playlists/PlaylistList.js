import React from "react";
import Popup from "reactjs-popup";
import ShowPlaylists from "./ShowPlaylists";
import "./PlaylistList.css";

const initialState = {
  open: false,
  playlistName: "",
  playlistDescription: "",
  playlistImage: null,
  playlistNameError: "",
  playlistDescriptionError: "",
  playlistImageError: "",
  playlistMsg: ""
};

const userid = localStorage.getItem("userId");
const usertoken = localStorage.getItem("userToken");
const url = "http://music-mix.live/playlists/users/" + userid + "";
const request = new Request(url);
const header = new Headers();
header.append("Authorization", "Bearer " + usertoken);
const formData = new FormData();

class PlaylistList extends React.Component {
  constructor(props) {
    super(props);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);
  }

  state = initialState;

  handleUserInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFileSelected(e) {
    formData.append("image", e.target.files[0], e.target.name);
    this.setState({ playlistImage: e.target.value });
  }

  openPopup() {
    this.setState({ open: true });
  }

  closePopup() {
    this.setState(initialState);
  }

  validate = () => {
    let playlistNameError = "";
    let playlistDescriptionError = "";
    let playlistImageError = "";

    if (this.state.playlistName === "") {
      playlistNameError = "Please give your new playlist a name!";
    } else if (
      this.state.playlistName.length < 3 ||
      this.state.playlistName.length > 10
    ) {
      playlistNameError = "Name must be between 3 and 10 characters long!";
    } else if (this.state.playlistDescription.length > 150) {
      playlistDescriptionError = "Description can be max 150 characters long!";
    } else if (this.state.playlistImage === null) {
      playlistImageError = "Please choose image for this playlist!";
    }

    if (playlistNameError || playlistDescriptionError || playlistImageError) {
      this.setState({
        playlistNameError,
        playlistDescriptionError,
        playlistImageError
      });
      return false;
    }

    return true;
  };

  savePlaylist = () => {
    formData.append("name", this.state.playlistName);
    formData.append("description", this.state.playlistDescription);
    const isValid = this.validate();
    if (isValid) {
      const myInit = {
        method: "POST",
        body: formData,
        headers: header
      };
      fetch(request, myInit)
        .then(response => {
          console.log(response);
          if (response.ok) {
            console.log(response);
            this.setState({ playlistMsg: "Playlist created successfully!" });
            location.reload();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="PlaylistList">
        <p className="PlaylistLabel">Playlists</p>
        <button className="CreatePlaylist" onClick={this.openPopup}>
          Create playlist
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closePopup}
          modal
        >
          <div className="container CreatePlaylistPopup">
            <a className="close" onClick={this.closePopup}>
              &times;
            </a>
            <h2>Create your new playlist...</h2>
            <br />
            <div className="row">
              <label>Playlist name:</label>
              <input
                type="text"
                className="playlistName"
                name="playlistName"
                value={this.state.playlistName}
                onChange={this.handleUserInput}
              />
              <p className="playlistError">{this.state.playlistNameError}</p>
            </div>
            <br />
            <div className="row">
              <label>Playlist description:</label>
              <textarea
                value={this.state.playlistDescription}
                onChange={this.handleUserInput}
                className="playlistDescription"
                name="playlistDescription"
                cols={30}
                rows={3}
              ></textarea>
              <p className="playlistError">
                {this.state.playlistDescriptionError}
              </p>
            </div>
            <br />
            <div className="row">
              <label>Playlist image:</label>
              <input
                type="file"
                className="playlistImage"
                name="playlistImage"
                value={this.state.playlistImage}
                onChange={this.handleFileSelected}
              />
              <p className="playlistError">{this.state.playlistImageError}</p>
            </div>
            <br />
            <div>
              <button
                className="createPalylist-close"
                onClick={this.closePopup}
              >
                Close
              </button>
              <button
                className="createPalylist-save"
                onClick={this.savePlaylist}
              >
                Save playlist
              </button>
            </div>
            <br />
            <p className="playlistMsg">{this.state.playlistMsg}</p>
          </div>
        </Popup>
        <div className="listOfPlaylists">
          <ShowPlaylists />
        </div>
      </div>
    );
  }
}

export default PlaylistList;
