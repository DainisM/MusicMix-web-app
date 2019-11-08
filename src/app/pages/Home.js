import React from "react";
import { withRouter } from "react-router";
import "./styles/Home.css";
import DefaultLayout from "./Layouts/DefaultLayout";

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div className="home">
          <div className="catchPhrase">
            <h3>Music for everyone</h3>
            <h4>Tons of different music for every vibe</h4>
          </div>
          <div className="content">
            <div
              className="musicPlayer"
              style={{
                display: localStorage.getItem("userId") ? "block" : "none"
              }}
            >
              <div className="row playerRow">
                <p>Jump in a world full of good music now</p>
              </div>
              <div className="row playerRow">
                <a href="/player">
                  <button className="musicPlayerBtn " type="button">
                    Open Music Player
                  </button>
                </a>
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
                    Hand-picked playlists by our editors, who are scouring the
                    globe to find and make the best playlist for every mood
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
                    Create your music library from many playlists, genres, mixes
                    and more to always enjoy yourself with good music
                  </p>
                </div>
              </div>
            </div>

            <div className="container-fluid listen-to-music">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="listen-web-image"
                    src={require("../images/listen-on-web.png")}
                    alt=""
                    width="490px"
                    height="320"
                  />
                </div>
                <div className="col-md-6">
                  <h3>You bring the passion.</h3>
                  <h3>We bring the good vibe.</h3>
                  <h4>Listen to tons of good music here on web.</h4>
                </div>
              </div>
            </div>

            <div className="container news">
              <h3>Comming soon...</h3>
              <p>
                MusicMix is rapidly growing and we are always trying to develop
                new neat features for our users.
              </p>
              <p>
                Our next big thing we are working on is mobile version of our
                MusicMix Services.
              </p>
              <img src={require("../images/mobile-version.jpg")} alt="" />
            </div>

            <div
              className="signup-teaser"
              style={{
                display: localStorage.getItem("userId") ? "none" : "block"
              }}
            >
              <h3>Try MusicMix for free</h3>
              <p>
                Search for tracks, build your own playlists and listen to
                pre-created playlists
              </p>
              <a href="/signup">
                <button className="signupLink" type="button">
                  Create account
                </button>
              </a>

              <div className="row login-teaser">
                <p>Already have an account?</p>
                <a href="/login">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

export default withRouter(Home);
