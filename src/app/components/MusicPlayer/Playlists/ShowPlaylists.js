import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ShowPlaylists.css";

const userid = localStorage.getItem("userId");
const usertoken = localStorage.getItem("userToken");
const url = "http://music-mix.live/playlists/users/" + userid + "";
const authString = "Bearer " + usertoken;

class ShowPlaylists extends React.Component {
  state = {
    playlists: []
  };

  componentDidMount() {
    axios
      .get(url, { headers: { Authorization: authString } })
      .then(res => {
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
