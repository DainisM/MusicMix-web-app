import React from "react";
import axios from "axios";
import "./GetUser.css";

//Api authorization
const userid = localStorage.getItem("userId");
const usertoken = localStorage.getItem("userToken");
const url = "http://api.music-mix.live/users/" + userid + "";
const authString = "Bearer " + usertoken;

class GetUser extends React.Component {
  //State objects
  state = {
    userName: "",
    userEmail: "",
    userBirthday: "",
    userGender: ""
  };

  //Method for fetching data (Initialazed on render)
  componentDidMount() {
    axios
      .get(url, { headers: { Authorization: authString } })
      .then(response => response.data)
      .then(data => {
        //If response ok then set data into state
        this.setState({
          userName: data.username,
          userEmail: data.email,
          userBirthday: data.details.birthday,
          userGender: data.details.gender
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  render() {
    return (
      <div className="getUser">
        <h1>Account overview</h1>
        {/*Table for displaying fetched data*/}
        <table className="UserInfoTable">
          <tr>
            <td className="profileTableLabel">Username</td>
            <td>{this.state.userName}</td>
          </tr>
          <tr>
            <td className="profileTableLabel">Email</td>
            <td>{this.state.userEmail}</td>
          </tr>
          <tr>
            <td className="profileTableLabel">Birthday</td>
            <td>{this.state.userBirthday}</td>
          </tr>
          <tr>
            <td className="profileTableLabel">Gender</td>
            <td>{this.state.userGender}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default GetUser;
