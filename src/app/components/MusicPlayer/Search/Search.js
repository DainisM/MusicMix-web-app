import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Popup from "reactjs-popup";
import { toast } from 'react-toastify';
import "./Search.css";

//API Authorization
const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;
const userId = localStorage.getItem("userId");
const header = new Headers();
header.append("Content-Type", "application/json");
header.append("Authorization", "Bearer " + usertoken);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  // State objets
  state = {
    searchKeyword: "",
    songs: [],
    searchFailed: false,
    showAudioPlayer: false,
    songsList: [],
    song_src: null,
    song_name: null,
    song_artist: null,
    song_id: null,
    userPlaylists: [],
    userHasPlaylist: false
  };

  //Method for calling showUserPlaylist method (Initialazed on render)
  componentDidMount = () => {
    this.showUserPlaylists();
  };

  // Method for handling user input
  handleUserInput(e) {
    this.setState({ searchKeyword: e.target.value });
  }

  // Method for fetching data
  searchFetch = () => {
    axios
      .get("http://api.music-mix.live/search/" + this.state.searchKeyword, {
        headers: { Authorization: authString }
      })
      .then(res => {
        // If response ok, set response data to state object
        if (res.status === 200) {
          this.setState({
            searchFailed: false,
            songs: res.data.tracks,
            songsList: res.data.tracks.map(tracks => tracks.url)
          });
          console.log(this.state.searchFailed)
        }
      })
      .catch(error => {
        // If response failed set state "searchFailed" to true
        this.setState({ searchFailed: true });
        console.log("error " + error);
        console.log(this.state.searchFailed)
      });
  };

  //Method for handling user click and setting song url to state of the clicked div(which holds url)
  handleClick = e => {
    var index = this.state.songsList.findIndex(t => t == e.target.value);
    this.setState({
      song_src: e.target.value,
      song_name: this.state.songs[index].name,
      song_artist: this.state.songs[index].artist,
      song_id: this.state.songs[index]._id,
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
    var index = this.state.songsList.findIndex(t => t == this.state.song_src);
    if (this.state.songsList.length > index + 1) {
      this.setState({
        song_src: this.state.songsList[index + 1],
        song_name: this.state.songs[index + 1].name,
        song_artist: this.state.songs[index + 1].artist,
        song_id: this.state.songs[index + 1]._id
      });
    } else {
      this.setState({
        song_src: this.state.songsList[0],
        song_name: this.state.songs[0].name,
        song_artist: this.state.songs[0].artist,
        song_id: this.state.songs[0]._id
      });
    }
  }

  //Method passed to audioPlayer hich finds current song index in array of all songs and then sets song_src url to previous index url
  onPlayerPrev() {
    var index = this.state.songsList.findIndex(t => t == this.state.song_src);
    if (index - 1 < 0) {
      console.log("No more songs");
      return false;
    } else {
      this.setState({
        song_src: this.state.songsList[index - 1],
        song_name: this.state.songs[index - 1].name,
        song_artist: this.state.songs[index - 1].artist,
        song_id: this.state.songs[index - 1]._id
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
        <div className="Search">
          <div id="SearchMain">
            <h1>Search for</h1>
            {/* Div for user to input desired search keyword and button to trigger fetch method  */}
            <div className="SearchInputDiv">
              <input
                id="SearchInput"
                type="text"
                value={this.state.searchKeyword}
                onChange={this.handleUserInput}
              />
              <button id="SearchBtn" onClick={this.searchFetch}>
                Search
              </button>
            </div>
            <br />
            <div style={{ display: this.state.searchFailed ? "block" : "none" }}>
              <p className="noResult">Sorry, no results were found.</p>
            </div>
            {/* Div for showing fetched data*/}
            <div id="SearchResults" style={{ display: this.state.searchFailed ? "none" : "block" }}>
              {this.state.songs.map(searchSongs => (
                <span className="row searchSongs" key={searchSongs._id} style={{
                  background: searchSongs._id === this.state.song_id ? "#005766" : "none"
                }}>
                  <span className="col1">
                    <button
                      className="playlistTrackIcon"
                      value={
                        searchSongs.url
                      }
                      onClick={this.handleClick}
                    ></button>
                  </span>
                  <span className="col2">
                    <p className="searchSongsName">{searchSongs.name}</p>
                    <Link
                      className="searchSongsArtist"
                      to={{
                        pathname: "/player/artist/" + searchSongs.artist_id[0]
                      }}
                      params={{ artistId: searchSongs.artist_id[0] }}
                    >
                      {searchSongs.artist[0]}
                    </Link>
                    <Link
                      className="searchSongsArtist"
                      to={{
                        pathname: "/player/artist/" + searchSongs.artist_id[1]
                      }}
                      params={{ artistId: searchSongs.artist_id[1] }}
                    >
                      &#160;{searchSongs.artist[1]}
                    </Link>
                    <Link
                      className="searchSongsArtist"
                      to={{
                        pathname: "/player/artist/" + searchSongs.artist_id[2]
                      }}
                      params={{ artistId: searchSongs.artist_id[2] }}
                    >
                      &#160;{searchSongs.artist[2]}
                    </Link>
                  </span>
                  <span className="col3">
                    {searchSongs.explicit === true ? (
                      <label className="searchSongsLabel">EXPLICIT</label>
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
                          <button name={searchSongs._id} value={userPlaylist._id} onClick={this.addToPlaylist}>{userPlaylist.name}</button>
                        ))}
                      </div>
                    </Popup>
                  </span>
                </span>
              ))}
            </div>
          </div>
          {this.getAudioComponent()}
        </div>
      </MusicPlayerLayout>
    );
  }
}

export default Search;
