import React from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import "./ChangePass.css";

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

  handleUserInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    axios
      .get(Geturl, { headers: { Authorization: authString } })
      .then(response => {
        this.setState({
          pass: response.data.password
        });
        console.log(this.state.pass);
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

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
    if (this.state.newPass === this.state.newPassConfirm) {
      this.setState({ isPassOk: true });
      return true;
    } else {
      this.setState({ passError: "New password does not match!" });
      return false;
    }
  };

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

    if (this.state.currentPassOK === true) {
      return true;
    }
    return false;
  };

  PatchPass = () => {
    const comparePass = this.comparePass();
    const isPassOk = this.passIsOk();
    if (comparePass && isPassOk) {
      const myInit = {
        method: "PATCH",
        body: JSON.stringify({
          password: this.state.newPass
        }),
        headers: header
      };

      fetch(request, myInit)
        .then(response => {
          console.log(response);
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
        <p
          className="changePassMsg"
          style={{ color: this.state.passMsg ? "#005766" : "red" }}
        >
          {this.state.passMsg || this.state.passError}
        </p>
        <button className="changePassBtn" onClick={this.PatchPass}>
          Change password
        </button>
      </div>
    );
  }
}

export default ChangePass;
