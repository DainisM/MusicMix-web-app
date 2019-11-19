import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import "./Search.css";

// API Authorization
const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  // State objets
  state = {
    searchKeyword: "",
    songs: [],
    searchFailed: false
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
          this.setState({ songs: res.data.tracks });
        }
      })
      .catch(error => {
        // If response failed set state "searchFailed" to true
        this.setState({ searchFailed: true });
        console.log("error " + error);
      });
  };

  render() {
    return (
      <MusicPlayerLayout>
        <div className="Search">
          <div id="SearchMain">
            <h1>Search for</h1>
            {/* Div for user to input desired search keyword and button to trigger fetch method  */}
            <div className="row">
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
            {/* Div for showing fetched data*/}
            <div id="SearchResults">
              {this.state.songs.map(searchSongs => (
                <span className="row searchSongs" key={searchSongs._id}>
                  <span className="col1">
                    <button></button>
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
                    <button className="searchSongsBtn">...</button>
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </MusicPlayerLayout>
    );
  }
}

export default Search;
