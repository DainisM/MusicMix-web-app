import React from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import "./ChangePass.css";

//Api authorization
const userid = localStorage.getItem("userId");
const usertoken = localStorage.getItem("userToken");
const Geturl = "http://api.music-mix.live/users/" + userid + "";
const Passurl = "http://api.music-mix.live/users/pass/" + userid + "";
const request = new Request(Passurl);
const header = new Headers();
header.append("Content-Type", "application/json");
header.append("Authorization", "Bearer " + usertoken);
const authString = "Bearer " + usertoken;

class ChangePass extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  //State objects
  state = {
    pass: "",
    currentPass: "",
    isPassOk: false,
    currentPassOK: false,
    newPass: "",
    newPassConfirm: "",
    passError: "",
    passMsg: ""
  };

  //Method for handling user inputs
  handleUserInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //Method for fetching data (Initialazed in render)
  componentDidMount() {
    axios
      .get(Geturl, { headers: { Authorization: authString } })
      .then(response => {
        //If response ok then set data to password state
        this.setState({
          pass: response.data.password
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  //Method for validating new password and confirm pass
  passIsOk = () => {
    if (
      !this.state.newPass.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
      )
    ) {
      this.setState({
        passError:
          "Password must contain at least 8 characters and contain at least 1 number, 1 uppercase and 1 lowercase character"
      });
      return false;
    }
    // If no errors and passwords match then return true
    if (this.state.newPass === this.state.newPassConfirm) {
      this.setState({ isPassOk: true });
      return true;
    }
    //If password does not match passError state is set to this msg and return false
    else {
      this.setState({ passError: "New password does not match!" });
      return false;
    }
  };

  //Method for comparing crypted password received from API and "Current pass" input
  comparePass = () => {
    bcrypt.compare(this.state.currentPass, this.state.pass, (err, result) => {
      if (err) {
        console.log("Error happened");
        this.setState({ passError: "Something went wrong" });
      }
      if (result) {
        console.log("Password match!");
        this.setState({ currentPassOK: true });
      } else {
        console.log("Password dont match.");
        this.setState({ passError: "Invalid currrent password!" });
      }
    });

    //If passwords match then return true
    if (this.state.currentPassOK === true) {
      return true;
    }
    //If password does not match then return false
    return false;
  };

  //Method for patching password
  PatchPass = () => {
    //Calling comparePass and passIsOk methods
    const comparePass = this.comparePass();
    const isPassOk = this.passIsOk();
    //If both methods return true then continue
    if (comparePass && isPassOk) {
      //Set method, body with data (new pass) and header for PATCH request
      const myInit = {
        method: "PATCH",
        body: JSON.stringify({
          password: this.state.newPass
        }),
        headers: header
      };

      //Fetch response
      fetch(request, myInit)
        .then(response => {
          //If response ok then set passMsg to "...updated successfully"
          if (response.status === 200) {
            this.setState({ passMsg: "Password updated successfully!" });
          }
          return response.json();
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="changePass">
        <h1>Change password</h1>
        <form className="signup-form">
          {/*Label and input for current pass*/}
          <label className="changePassLabel">Current Password</label>
          <br />
          <input
            className="changePassInput"
            value={this.state.currentPass}
            onChange={this.handleUserInput}
            type="password"
            name="currentPass"
          />
          <br />
          {/*Label and input for new pass*/}
          <label className="changePassLabel">New password</label>
          <br />
          <input
            className="changePassInput"
            value={this.state.newPass}
            onChange={this.handleUserInput}
            type="password"
            name="newPass"
          />
          <br />
          {/*label and input for confirm new pass*/}
          <label className="changePassLabel">Confirm new password</label>
          <br />
          <input
            className="changePassInput"
            value={this.state.newPassConfirm}
            onChange={this.handleUserInput}
            type="password"
            name="newPassConfirm"
          />
          <br />
        </form>
        <br />
        {/*Messages error or successfull*/}
        <p
          className="changePassMsg"
          style={{ color: this.state.passMsg ? "#005766" : "red" }}
        >
          {this.state.passMsg || this.state.passError}
        </p>
        {/*Button to change pass*/}
        <button className="changePassBtn" onClick={this.PatchPass}>
          Change password
        </button>
      </div>
    );
  }
}

export default ChangePass;
