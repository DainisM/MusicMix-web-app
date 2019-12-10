import React from "react";
import MusicPlayerLayout from "../../../pages/Layouts/MusicPlayerLayout";
import MusicplayerTopNav from "../Nav/MusicplayerTopNav";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Featured.css"

//API Authorization
const usertoken = localStorage.getItem("userToken");
const authString = "Bearer " + usertoken;

//Initial state object
const initalState = {
  featured: []
};

class Featured extends React.Component {
  //Setting state to initialState
  state = initalState;

  //Method for fetching all tops (Initialazed on render)
  componentDidMount = () => {
    axios
      .get("http://api.music-mix.live/browse/tops", {
        headers: { Authorization: authString }
      })
      .then(res => {
        console.log(res.data.tops)
        //If response ok then set data to state
        this.setState({ featured: res.data.tops });
      })
      .catch(error => {
        console.log("error " + error);
      });
    this.setState({ state: initalState });
  };


  render() {
    return (
      <MusicPlayerLayout>
        <div className="Featured">
          <MusicplayerTopNav />
          {/*Div for list of all tops from API*/}
          <div className="row featuredList">
            <Link
              to={{ pathname: "/player/newest" }}
            >
              <div className="col-lg-4 newestLink">
                <img src={require("../../../images/NewestMusic.jpg")} width="350px" height="350px" />
                <br />
                <h4>Newest tracks</h4>
              </div>
            </Link>
            {this.state.featured.map(featured => (
              <Link
                key={featured._id}
                to={{ pathname: "/player/tops/" + featured._id }}
                params={{
                  topsId: featured._id
                }}
              >
                <div className="col-lg-4 featuredListGenre">
                  <img src={featured.links.image} width="350px" height="350px" />
                  <br />
                  <h4>{featured.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </MusicPlayerLayout>
    );
  }
};

export default Featured;
