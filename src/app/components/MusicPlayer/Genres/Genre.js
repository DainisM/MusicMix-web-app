import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import MusicplayerTopNav from "../Nav/MusicplayerTopNav";
import "./Genre.css";

const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;

const initalState = {
  genreName: "",
  genreDescription: "",
  genreImage: "",
  genreTracks: []
};

class Genres extends React.Component {
  state = initalState;

  componentDidMount = () => {
    this.renderGenre();
    setTimeout(() => {
      this.renderGenreTracks();
    }, 500);
  };

  renderGenre() {
    axios
      .get(
        "http://api.music-mix.live/browse/genres/" +
          this.props.match.params.genreId,
        {
          headers: { Authorization: authString }
        }
      )
      .then(res => {
        this.setState({
          genreName: res.data.name,
          genreDescription: res.data.description,
          genreImage: res.data.links.image
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  renderGenreTracks() {
    axios
      .get(
        "http://api.music-mix.live/browse/genres/tracks/" +
          this.state.genreName,
        {
          headers: { Authorization: authString }
        }
      )
      .then(res => {
        this.setState({
          genreTracks: res.data.tracks
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
        <div className="Genre">
          <MusicplayerTopNav />
          <div className="genreInfo">
            <img src={this.state.genreImage} height="300px" width="300px" />
            <h4 id="genre_name">{this.state.genreName}</h4>
            <p id="genre_description">{this.state.genreDescription}</p>
          </div>
          <div className="genreTracksList">
            {this.state.genreTracks.map(genreTracks => (
              <span className="row genreTracks" key={genreTracks._id}>
                <span className="col1">
                  <button></button>
                </span>
                <span className="col2">
                  <p className="genreTrackName">{genreTracks.name}</p>
                  <Link
                    className="genreTrackArtist"
                    to={{
                      pathname: "/player/artist/" + genreTracks.artist_id[0]
                    }}
                    params={{ artistId: genreTracks.artist_id[0] }}
                  >
                    {genreTracks.artist[0]}
                  </Link>
                  <Link
                    className="genreTrackArtist"
                    to={{
                      pathname: "/player/artist/" + genreTracks.artist_id[1]
                    }}
                    params={{ artistId: genreTracks.artist_id[1] }}
                  >
                    &#160;{genreTracks.artist[1]}
                  </Link>
                  <Link
                    className="genreTrackArtist"
                    to={{
                      pathname: "/player/artist/" + genreTracks.artist_id[2]
                    }}
                    params={{ artistId: genreTracks.artist_id[2] }}
                  >
                    &#160;{genreTracks.artist[2]}
                  </Link>
                </span>
                <span className="col3">
                  {genreTracks.explicit === true ? (
                    <label className="genreTrackLabel">EXPLICIT</label>
                  ) : null}
                </span>
                <span className="col4">
                  <button className="genreTrackBtn">...</button>
                </span>
              </span>
            ))}
          </div>
        </div>
      </MusicPlayerLayout>
    );
  }
}

export default Genres;
