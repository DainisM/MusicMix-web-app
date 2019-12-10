import React from "react";
import axios from "axios";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Popup from "reactjs-popup";
import { toast } from 'react-toastify';
import "./Artist.css";

//API Authorization
const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;
const userId = localStorage.getItem("userId");
const header = new Headers();
header.append("Content-Type", "application/json");
header.append("Authorization", "Bearer " + usertoken);

// InitialState objects
const initalState = {
  artist_name: "",
  artist_type: "",
  artist_carrierStart: "",
  artist_active: "",
  artist_description: "",
  artist_location: "",
  artistTracks: [],
  artistTracksList: [],
  artist_image: "",
  artist_links: "",
  showAudioPlayer: false,
  song_src: null,
  song_name: null,
  song_artist: null,
  song_id: null,
  userPlaylists: [],
  userHasPlaylist: false
};

class Artist extends React.Component {
  //State set to initialState
  state = initalState;

  //Method which calls for fetch methods (initialazed on render)
  componentDidMount = () => {
    this.renderArtist();
    this.renderArtistTracks();
    this.showUserPlaylists();
  };

  //Method which calls for fetch metod if props changed
  componentWillUpdate = nextProps => {
    if (nextProps.match.params.artistId != this.props.match.params.artistId) {
      location.reload();
      this.renderArtist();
    }
  };

  //Method for handling user click and setting song url to state of the clicked div(which holds url)
  handleClick = e => {
    var index = this.state.artistTracksList.findIndex(t => t == e.target.value);
    this.setState({
      song_src: e.target.value,
      song_name: this.state.artistTracks[index].name,
      song_id: this.state.artistTracks[index]._id,
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
    var index = this.state.artistTracksList.findIndex(t => t == this.state.song_src);
    if (this.state.artistTracksList.length > index + 1) {
      this.setState({
        song_src: this.state.artistTracksList[index + 1],
        song_name: this.state.artistTracks[index + 1].name,
        song_id: this.state.artistTracks[index + 1]._id
      });
    } else {
      this.setState({
        song_src: this.state.artistTracksList[0],
        song_name: this.state.artistTracks[0].name,
        song_id: this.state.artistTracks[0]._id
      });
    }
  }

  //Method passed to audioPlayer hich finds current song index in array of all songs and then sets song_src url to previous index url
  onPlayerPrev() {
    var index = this.state.artistTracksList.findIndex(t => t == this.state.song_src);
    if (index - 1 < 0) {
      console.log("No more songs");
      return false;
    } else {
      this.setState({
        song_src: this.state.artistTracksList[index - 1],
        song_name: this.state.artistTracks[index - 1].name,
        song_id: this.state.artistTracks[index - 1]._id
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
          artist=""
          onDone={this.onSongDone.bind(this)}
          onNext={this.onPlayerNext.bind(this)}
          onPrev={this.onPlayerPrev.bind(this)}
        />
      );
    } else {
      return null;
    }
  };

  //Method for fetching artist data
  renderArtist() {
    axios
      .get(
        "http://api.music-mix.live/artists/" + this.props.match.params.artistId,
        { headers: { Authorization: authString } }
      )
      .then(res => {
        // If response ok then seting data to state
        this.setState({
          artist_image: res.data.urls.image,
          artist_name: res.data.name,
          artist_type: res.data.details.type,
          artist_carrierStart: res.data.details.carrier_start,
          artist_active: res.data.details.active,
          artist_location: res.data.details.location,
          artist_description: res.data.description,
          artist_links: res.data.urls.external_url
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
    this.setState({ state: initalState });
  }

  //Method for fetching artist songs
  renderArtistTracks() {
    axios
      .get(
        "http://api.music-mix.live/artists/tracks/" +
        this.props.match.params.artistId,
        { headers: { Authorization: authString } }
      )
      .then(res => {
        //If response ok then setting data to state
        this.setState({
          artistTracks: res.data.tracks,
          artistTracksList: res.data.tracks.map(tracks => tracks.url)
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
        <div className="Artist">
          {/*Div for artist image and name*/}
          <div className="artistInfo">
            <img
              className="artistImage"
              src={this.state.artist_image}
              width="500px"
              height="width"
            />
            <p id="artist_name">{this.state.artist_name}</p>
          </div>
          {/*Div for more specifik artist info (table)*/}
          <div className="artistInfoTable">
            <table>
              <tr>
                <td>Type:</td>
                <td>{this.state.artist_type}</td>
              </tr>
              <tr>
                <td>Carrier start:</td>
                <td>{this.state.artist_carrierStart}</td>
              </tr>
              <tr>
                <td>Active:</td>
                <td>{this.state.artist_active}</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>{this.state.artist_location}</td>
              </tr>
            </table>
          </div>
          <br />
          {/*Div for artist description and external link*/}
          <div className="artistDescription">
            <p>{this.state.artist_description}</p>
            <p>
              You can find more information{" "}
              <a target="blank" href={this.state.artist_links}>here</a>.
            </p>
          </div>
          {/*Div for artist songs*/}
          <div className="artistTracksList">
            <h4>Here are the tracks of the following artist/band</h4>
            {this.state.artistTracks.map(artistTracks => (
              < span className="row artistTracks" key={artistTracks._id} style={{
                background: artistTracks._id === this.state.song_id ? "#005766" : "none"
              }}>
                <span className="col1">
                  <button
                    className="playlistTrackIcon"
                    value={
                      artistTracks.url
                    }
                    onClick={this.handleClick}
                  ></button>
                </span>
                <span className="col2">
                  <p className="artistTrackName">{artistTracks.name}</p>
                </span>
                <span className="col3">
                  {artistTracks.explicit === true ? (
                    <label className="artistTrackLabel">EXPLICIT</label>
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
                        <button name={artistTracks._id} value={userPlaylist._id} onClick={this.addToPlaylist}>{userPlaylist.name}</button>
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

export default Artist;