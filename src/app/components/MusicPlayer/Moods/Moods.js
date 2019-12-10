import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import MusicplayerTopNav from "../Nav/MusicplayerTopNav";
import "./Moods.css";

//API Authorization
const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;

//Initial state object
const initalState = {
  moods: []
};


class Moods extends React.Component {
  //Setting state to initialState
  state = initalState;

  //Method for fetching all moods (Initialazed on render)
  componentDidMount = () => {
    axios
      .get("http://api.music-mix.live/browse/moods", {
        headers: { Authorization: authString }
      })
      .then(res => {
        //If response ok then set data to state
        this.setState({ moods: res.data.moods });
      })
      .catch(error => {
        console.log("error " + error);
      });
    this.setState({ state: initalState });
  };

  render() {
    return (
      <MusicPlayerLayout>
        <div className="Moods">
          <MusicplayerTopNav />
          {/*Div for list of all moods from API*/}
          <div className="row moodsList">
            {this.state.moods.map(moods => (
              <Link
                key={moods._id}
                to={{ pathname: "/player/moods/" + moods._id }}
                params={{
                  moodId: moods._id
                }}
              >
                <div className="col-lg-4 moodsListGenre">
                  <img src={moods.links.image} width="350px" height="350px" />
                  <br />
                  <h4>{moods.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </MusicPlayerLayout>
    );
  }
};

export default Moods;
