import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import MusicplayerTopNav from "../Nav/MusicplayerTopNav";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Popup from "reactjs-popup";
import { toast } from 'react-toastify';
import "./Newest.css";

//API Authorization
const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;
const userId = localStorage.getItem("userId");
const header = new Headers();
header.append("Content-Type", "application/json");
header.append("Authorization", "Bearer " + usertoken);

// Initialstate object
const initalState = {
  newestTracks: [],
  showAudioPlayer: false,
  newestTracksList: [],
  song_src: null,
  song_name: null,
  song_artist: null,
  song_id: null,
  userPlaylists: [],
  userHasPlaylist: false
};

class Newest extends React.Component {
  //Setting state to initialState
  state = initalState;

  //Method for calling fetch newest method and showUserPlaylist method
  componentDidMount = () => {
    this.renderNewest();
    this.showUserPlaylists();
  };

  //Method for handling user click and setting song url to state of the clicked div(which holds url)
  handleClick = e => {
    var index = this.state.newestTracksList.findIndex(t => t == e.target.value);
    this.setState({
      song_src: e.target.value,
      song_name: this.state.newestTracks[index].name,
      song_artist: this.state.newestTracks[index].artist,
      song_id: this.state.newestTracks[index]._id,
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
    var index = this.state.newestTracksList.findIndex(t => t == this.state.song_src);
    if (this.state.newestTracksList.length > index + 1) {
      this.setState({
        song_src: this.state.newestTracksList[index + 1],
        song_name: this.state.newestTracks[index + 1].name,
        song_artist: this.state.newestTracks[index + 1].artist,
        song_id: this.state.newestTracks[index + 1]._id
      });
    } else {
      this.setState({
        song_src: this.state.newestTracksList[0],
        song_name: this.state.newestTracks[0].name,
        song_artist: this.state.newestTracks[0].artist,
        song_id: this.state.newestTracks[0]._id
      });
    }
  }

  //Method passed to audioPlayer hich finds current song index in array of all songs and then sets song_src url to previous index url
  onPlayerPrev() {
    var index = this.state.newestTracksList.findIndex(t => t == this.state.song_src);
    if (index - 1 < 0) {
      console.log("No more songs");
      return false;
    } else {
      this.setState({
        song_src: this.state.newestTracksList[index - 1],
        song_name: this.state.newestTracks[index - 1].name,
        song_artist: this.state.newestTracks[index - 1].artist,
        song_id: this.state.newestTracks[index - 1]._id
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

  renderNewest() {
    axios
      .get(
        "http://api.music-mix.live/browse/newest/",
        {
          headers: { Authorization: authString }
        }
      )
      .then(res => {
        console.log(res.data.tracks)
        //IF response ok then set data to state
        this.setState({
          newestTracks: res.data.tracks,
          newestTracksList: res.data.tracks.map(
            tracks => tracks.url
          )
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
    this.setState({ state: initalState });
  }

  //Method for showing users playlists to choose to which add a song
  showUserPlaylists = () => {
    axios
      .get(
        "http://api.music-mix.live/playlists/users/" + userId,
        {
          headers: { Authorization: authString }
        }
      )
      .then(res => {
        if (res.status == 200) {
          this.setState({
            userHasPlaylist: true,
            userPlaylists: res.data.response.playlist
          })
        } else {
          this.setState({
            userHasPlaylist: false
          })
        }
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  //Method for adding track to user playlist
  addToPlaylist = (e) => {
    const url = "http://api.music-mix.live/playlists/" + e.target.value + "/users/" + userId + "/tracks";
    const request = new Request(url);

    const myInit = {
      method: "PATCH",
      body: JSON.stringify({
        track_id: e.target.name
      }),
      headers: header
    };

    //Fetch request
    fetch(request, myInit)
      .then(response => {
        if (response.status === 200) {
          toast.info('Song added to playlist', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
        }
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <MusicPlayerLayout>
        <div className="Newest">
          <MusicplayerTopNav />
          {/*Div for newest top image, name and description*/}
          <div className="newestInfo">
            <img src={require("../../../images/NewestMusic.jpg")} height="300px" width="300px" />
            <h4 id="newest_name">Newest Tracks</h4>
            <p id="newest_description">Here is top 20 of the newest tracks on MusicMix</p>
          </div>
          {/*Div for newest songs*/}
          <div className="newestTracksList">
            {this.state.newestTracks.map(newestTracks => (
              <span className="row newestTracks" key={newestTracks._id} style={{
                background: newestTracks._id === this.state.song_id ? "#005766" : "none"
              }}>
                <span className="col1">
                  <button
                    className="playlistTrackIcon"
                    value={
                      newestTracks.url
                    }
                    onClick={this.handleClick}
                  ></button>
                </span>
                <span className="col2">
                  <p className="newestTrackName">{newestTracks.name}</p>
                  {/*Links to artist*/}
                  <Link
                    className="newestTrackArtist"
                    to={{
                      pathname: "/player/artist/" + newestTracks.artist_id[0]
                    }}
                    params={{ artistId: newestTracks.artist_id[0] }}
                  >
                    {newestTracks.artist[0]}
                  </Link>
                  <Link
                    className="newestTrackArtist"
                    to={{
                      pathname: "/player/artist/" + newestTracks.artist_id[1]
                    }}
                    params={{ artistId: newestTracks.artist_id[1] }}
                  >
                    &#160;{newestTracks.artist[1]}
                  </Link>
                  <Link
                    className="newestTrackArtist"
                    to={{
                      pathname: "/player/artist/" + newestTracks.artist_id[2]
                    }}
                    params={{ artistId: newestTracks.artist_id[2] }}
                  >
                    &#160;{newestTracks.artist[2]}
                  </Link>
                </span>
                <span className="col3">
                  {newestTracks.explicit === true ? (
                    <label className="newestTrackLabel">EXPLICIT</label>
                  ) : null}
                </span>
                <span className="col4">
                  {/*Popup with functions to add song to playlist*/}
                  <Popup
                    trigger={open => (
                      <button className="playlistTrackBtn" >...</button>
                    )}
                    position="left top"
                    closeOnDocumentClick
                  >
                    {/*If user doesnt have any playlist this div will be displayed*/}
                    <div className="noUserPlalist" style={{ display: this.state.userHasPlaylist ? "none" : "block" }}>
                      <p>You dont have any playlists</p>
                      <p>Please first create at least 1 playlist!</p>
                    </div>

                    {/*If user has playlists this div will be displayed with buttons for all user playlists*/}
                    <div className="userPlaylistAdd" style={{ display: this.state.userHasPlaylist ? "block" : "none" }}>
                      <p>Add song to playlist:</p>
                      {this.state.userPlaylists.map(userPlaylist => (
                        <button name={newestTracks._id} value={userPlaylist._id} onClick={this.addToPlaylist}>{userPlaylist.name}</button>
                      ))}
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

export default Newest;