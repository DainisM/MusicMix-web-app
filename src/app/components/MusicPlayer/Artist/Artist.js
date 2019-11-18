import React from "react";
import axios from "axios";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import "./Artist.css";

const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;

const initalState = {
  artist_name: "",
  artist_type: "",
  artist_carrierStart: "",
  artist_active: "",
  artist_description: "",
  artist_location: "",
  artistTracks: [],
  artist_image: "",
  artist_links: ""
};

class Artist extends React.Component {
  state = initalState;

  componentDidMount = () => {
    this.renderArtist();
    this.renderArtistTracks();
  };

  componentWillUpdate = nextProps => {
    if (nextProps.match.params.artistId != this.props.match.params.artistId) {
      location.reload();
      this.renderArtist();
    }
  };

  renderArtist() {
    axios
      .get(
        "http://api.music-mix.live/artists/" + this.props.match.params.artistId,
        { headers: { Authorization: authString } }
      )
      .then(res => {
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

  renderArtistTracks() {
    axios
      .get(
        "http://api.music-mix.live/artists/tracks/" +
          this.props.match.params.artistId,
        { headers: { Authorization: authString } }
      )
      .then(res => {
        this.setState({ artistTracks: res.data.tracks });
      })
      .catch(error => {
        console.log("error " + error);
      });
    this.setState({ state: initalState });
  }

  render() {
    return (
      <MusicPlayerLayout>
        <div className="Artist">
          <div className="artistInfo">
            <img
              className="artistImage"
              src={this.state.artist_image}
              width="500px"
              height="width"
            />
            <p id="artist_name">{this.state.artist_name}</p>
          </div>
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
          <div className="artistDescription">
            <p>{this.state.artist_description}</p>
            <p>
              You can find more information{" "}
              <a href={this.state.artist_links}>here</a>.
            </p>
          </div>
          <div className="artistTracksList">
            <h4>Here are the tracks of the following artist/band</h4>
            {this.state.artistTracks.map(artistTracks => (
              <span className="row artistTracks" key={artistTracks._id}>
                <span className="col1">
                  <button></button>
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
                  <button className="artistTrackBtn">...</button>
                </span>
              </span>
            ))}
          </div>
        </div>
      </MusicPlayerLayout>
    );
  }
}

export default Artist;
