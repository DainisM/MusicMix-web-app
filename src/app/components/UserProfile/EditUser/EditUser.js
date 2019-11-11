import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import "./EditUser.css";

const userid = localStorage.getItem("userId");
const usertoken = localStorage.getItem("userToken");
const url = "http://music-mix.live/users/" + userid;
const request = new Request(url);
const header = new Headers();
header.append("Content-Type", "application/json");
header.append("Authorization", "Bearer " + usertoken);
const authString = "Bearer " + usertoken;

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  state = {
    newUserName: "",
    newUserEmail: "",
    newUserBirthday: "",
    newUserGender: "",
    editMsg: ""
  };

  handleUserInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleBirthday = date => {
    this.setState({ newUserBirthday: moment(date).format("YYYY-MM-DD") });
  };

  componentDidMount() {
    axios
      .get(url, { headers: { Authorization: authString } })
      .then(response => {
        this.setState({
          newUserName: response.data.username,
          newUserEmail: response.data.email,
          newUserBirthday: response.data.details.birthday,
          newUserGender: response.data.details.gender
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  PatchData = () => {
    const myInit = {
      method: "PATCH",
      body: JSON.stringify({
        username: this.state.newUserName,
        email: this.state.newUserEmail,
        birthday: this.state.newUserBirthday,
        gender: this.state.newUserGender
      }),
      headers: header
    };

    fetch(request, myInit)
      .then(response => {
        if (response.status === 200) {
          this.setState({ editMsg: "Profile updated successfully!" });
        }
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });

    setTimeout(() => {
      window.location.reload();
      localStorage.setItem("userName", this.state.newUserName);
    }, 500);
  };

  render() {
    return (
      <div className="editUser">
        <h1>Edit profile</h1>
        <form className="signup-form">
          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              value={this.state.newUserEmail}
              onChange={this.handleUserInput}
              type="email"
              name="newUserEmail"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Username</label>
            <input
              value={this.state.newUserName}
              onChange={this.handleUserInput}
              type="text"
              name="newUserName"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Gender</label>
            <br />
            <select
              value={this.state.newUserGender}
              onChange={this.handleUserInput}
              name="newUserGender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <label className="control-label">Birthday</label>
          <br />
          <DatePicker
            placeholderText="Click to select a date"
            dateFormat="yyyy-MM-dd"
            selected={Date.parse(this.state.newUserBirthday)}
            onChange={this.handleBirthday}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </form>
        <br />
        <p className="editMsg">{this.state.editMsg}</p>
        <button className="EditUserBtn" onClick={this.PatchData}>
          Edit profile
        </button>
      </div>
    );
  }
}

export default EditUser;
