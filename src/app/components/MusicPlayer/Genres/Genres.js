import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import MusicplayerTopNav from "../Nav/MusicplayerTopNav";
import "./Genres.css";

const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;

const initalState = {
  genres: []
};

class Genres extends React.Component {
  state = initalState;

  componentDidMount = () => {
    this.renderGenres();
  };

  renderGenres() {
    axios
      .get("http://api.music-mix.live/browse/genres", {
        headers: { Authorization: authString }
      })
      .then(res => {
        console.log(res.data.genres);
        this.setState({ genres: res.data.genres });
      })
      .catch(error => {
        console.log("error " + error);
      });
    this.setState({ state: initalState });
  }

  render() {
    return (
      <MusicPlayerLayout>
        <div className="Genres">
          <MusicplayerTopNav />
          <div className="row genresList">
            {this.state.genres.map(genres => (
              <Link
                key={genres._id}
                to={{ pathname: "/player/genres/" + genres._id }}
                params={{
                  genreId: genres._id
                }}
              >
                <div className="col-lg-4 GenresListGenre">
                  <img src={genres.links.image} width="350px" height="350px" />
                  <br />
                  <h4>{genres.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </MusicPlayerLayout>
    );
  }
}

export default Genres;