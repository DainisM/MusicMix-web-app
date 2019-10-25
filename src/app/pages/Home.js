import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  handlePageChange() {}

  render() {
    return (
      <div className="home">
        <div className="catchPhrase">
          <h3>Music for everyone</h3>
          <h4>Tons of different music for every vibe</h4>
        </div>

        <div className="musicPlayer">
          <div className="row playerRow">
            <p>Jump in a world full of good music now</p>
          </div>
          <div className="row playerRow">
            <button className="musicPlayerBtn " type="button">
              Open Music Player
            </button>
          </div>
        </div>

        <div className="container information">
          <div className="row">
            <div className="col-lg-4 genres">
              <h4>Many different genres</h4>
              <img
                className="genreImg"
                src={require("../images/GenresMix.png")}
                alt=""
                width="256"
                height="256"
              />
              <p>
                Music sorted by genres for every taste, so everyone can find
                what they like the most
              </p>
              <br />
            </div>
            <div className="col-lg-4 collections">
              <h4>Hand-picked playlists</h4>
              <img
                src={require("../images/playlists_cassettes.jpg")}
                alt=""
                width="256"
                height="256"
              />
              <p>
                Original playlists hand-picked by our editors, who are
                constantly scouring the globe to find and make the best playlist
                for every mood
              </p>
            </div>
            <div className="col-lg-4 playlists">
              <h4>Make your own collection</h4>
              <img
                src={require("../images/subwoofer.png")}
                alt=""
                width="256"
                height="256"
              />
              <p>
                Create your music library from many playlists, genres, mixes and
                more to always enjoy yourself with good music
              </p>
            </div>
          </div>
        </div>

        <div className="signup-teaser">
          <h3>Try MusicMix for free</h3>
          <p>
            Search for tracks, build your own playlists and listen to
            pre-created playlists
          </p>
          <Link to="/signup">
            <button className="signupLink" type="button">
              Create account
            </button>
          </Link>
          <div className="row login-teaser">
            <p>Already have an account?</p>
            <button className="loginLink" type="button">
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
