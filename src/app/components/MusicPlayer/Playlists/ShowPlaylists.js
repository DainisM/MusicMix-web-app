import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ShowPlaylists.css";

//API Authorization
const userid = localStorage.getItem("userId");
const usertoken = localStorage.getItem("userToken");
const url = "http://api.music-mix.live/playlists/users/" + userid + "";
const authString = "Bearer " + usertoken;

class ShowPlaylists extends React.Component {
  //State object
  state = {
    playlists: []
  };

  //Method for fetching data (Initialazed on render)
  componentDidMount() {
    axios
      .get(url, { headers: { Authorization: authString } })
      .then(res => {
        // If response ok then set data to state
        this.setState({
          playlists: res.data.response.playlist
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  render() {
    return (
      <div className="ShowPlaylists">
        <ul>
          {/*List of all playlists of the user*/}
          {this.state.playlists.map(playlist => (
            <li key={playlist._id}>
              <Link
                to={{ pathname: "/player/playlist/" + playlist._id }}
                params={{ playlistId: playlist._id }}
              >
                {playlist.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShowPlaylists;
