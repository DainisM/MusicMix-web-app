import React from "react";
import Popup from "reactjs-popup";
import ShowPlaylists from "./ShowPlaylists";
import "./PlaylistList.css";

//InitialState objects
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

//API Authorization
const userid = localStorage.getItem("userId");
const usertoken = localStorage.getItem("userToken");
const url = "http://api.music-mix.live/playlists/users/" + userid + "";
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

  //Method for handling user inputs
  handleUserInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //Method for handling image upload(selection)
  handleFileSelected(e) {
    formData.append("image", e.target.files[0], e.target.name);
    this.setState({ playlistImage: e.target.value });
  }

  //Method for opening popup
  openPopup() {
    this.setState({ open: true });
  }

  //Method for closing popup
  closePopup() {
    this.setState(initialState);
  }

  //Method for validating user inputs
  validate = () => {
    let playlistNameError = "";
    let playlistDescriptionError = "";
    let playlistImageError = "";

    if (this.state.playlistName === "") {
      playlistNameError = "Please give your new playlist a name!";
    } else if (
      this.state.playlistName.length < 3 ||
      this.state.playlistName.length > 20
    ) {
      playlistNameError = "Name must be between 3 and 20 characters long!";
    } else if (this.state.playlistDescription.length > 150) {
      playlistDescriptionError = "Description can be max 150 characters long!";
    } else if (this.state.playlistImage === null) {
      playlistImageError = "Please choose image for this playlist!";
    }

    //If there is errors then set them to state and return false
    if (playlistNameError || playlistDescriptionError || playlistImageError) {
      this.setState({
        playlistNameError,
        playlistDescriptionError,
        playlistImageError
      });
      return false;
    }

    //Else return true
    return true;
  };

  //Method for posting data to API
  savePlaylist = () => {
    // Appending state data to formData
    formData.append("name", this.state.playlistName);
    formData.append("description", this.state.playlistDescription);
    //Invoking validate method
    const isValid = this.validate();
    //If validate method is true them continue and set method, body and header
    if (isValid) {
      const myInit = {
        method: "POST",
        body: formData,
        headers: header
      };
      //Fetch response
      fetch(request, myInit)
        .then(response => {
          console.log(response);
          if (response.ok) {
            //If response ok then set "playlistMsg" state and reload page
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
        {/*Button to call for openpopup method*/}
        <button className="CreatePlaylist" onClick={this.openPopup}>
          Create playlist
        </button>
        {/*Popup component*/}
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
            {/*Input and label for playlist name*/}
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
            {/*Input and label for description*/}
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
            {/*File input for image*/}
            <div className="row">
              <label>Playlist image:</label>
              <input
                type="file"
                className="playlistImageSelect"
                name="playlistImage"
                value={this.state.playlistImage}
                onChange={this.handleFileSelected}
              />
              <p className="playlistError">{this.state.playlistImageError}</p>
            </div>
            <br />
            <div>
              {/*Close popup button*/}
              <button
                className="createPalylist-close"
                onClick={this.closePopup}
              >
                Close
              </button>
              {/*Save playlist button*/}
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
