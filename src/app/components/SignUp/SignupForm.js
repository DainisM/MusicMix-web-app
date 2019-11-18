import moment from "moment";
import React from "react";
import { withRouter } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SignupForm.css";

const url = "http://api.music-mix.live/users/signup";
const header = new Headers();
header.append("Content-Type", "application/json");
const request = new Request(url);

const initialState = {
  email: "",
  username: "",
  password: "",
  passwordConfirmation: "",
  birthday: "",
  gender: "",
  terms: false,
  emailError: "",
  usernameError: "",
  passError: "",
  passConfError: "",
  birthdayError: "",
  genderError: "",
  termsError: "",
  signupSuccessful: "",
  singupError: ""
};

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    setTimeout(() => {
      this.props.history.push("/login");
    }, 3000);
  }

  handleUserInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let emailError = "";
    let usernameError = "";
    let passError = "";
    let passConfError = "";
    let birthdayError = "";
    let genderError = "";
    let termsError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (!this.state.username) {
      usernameError = "Invalid username";
    }

    if (this.state.username.length > 10 || this.state.username.length < 3) {
      usernameError = "Username must be between 3 and 10 characters long";
    }

    if (
      !this.state.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
      )
    ) {
      passError =
        "Password must contain at least 8 characters and contain at least 1 number, 1 uppercase and 1 lowercase character";
    }

    if (!this.state.password.match(this.state.passwordConfirmation)) {
      passConfError = "Password does not match";
    }

    if (!this.state.gender) {
      genderError = "Please choose a gender";
    }

    if (!this.state.birthday) {
      birthdayError = "Please choose your birthday";
    } else if (
      this.state.birthday === moment(new Date()).format("YYYY-MM-DD")
    ) {
      birthdayError = "Invalid date";
    }

    if (!this.state.terms == true) {
      termsError = "Please read and agree to our Terms and Conditions of Use";
    }

    if (
      emailError ||
      usernameError ||
      passError ||
      passConfError ||
      genderError ||
      birthdayError ||
      termsError
    ) {
      this.setState({
        emailError,
        usernameError,
        passError,
        passConfError,
        genderError,
        birthdayError,
        termsError
      });
      return false;
    }

    return true;
  };

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      const myInit = {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          birthday: this.state.birthday,
          gender: this.state.gender
        }),
        headers: header
      };

      fetch(request, myInit)
        .then(response => {
          if (response.status === 201) {
            let signupSuccessful =
              "User created successfully! Redirecting to login.";
            this.setState({ signupSuccessful });
          } else if (response.status === 409) {
            let singupError = "Email already exists!";
            this.setState({ singupError });
          }
          console.log(response);
          return response.json();
        })
        .catch(error => {
          console.log(error);
        });
      //Clear the form
      this.setState(initialState);
      this.redirect();
    }
  }

  handleBirthday = date => {
    this.setState({ birthday: moment(date).format("YYYY-MM-DD") });
  };

  handleCheck(e) {
    this.setState({ terms: !this.state.terms });
  }

  render() {
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h3>Sign up with your emil address</h3>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.handleUserInput}
            type="email"
            name="email"
            className="form-control"
          />
          <p className="validationMsg">{this.state.emailError}</p>
        </div>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.handleUserInput}
            type="text"
            name="username"
            className="form-control"
          />
          <p className="validationMsg">{this.state.usernameError}</p>
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.handleUserInput}
            type="password"
            name="password"
            className="form-control"
          />
          <p className="validationMsg">{this.state.passError}</p>
        </div>
        <div className="form-group">
          <label className="control-label">Confirm password</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.handleUserInput}
            type="password"
            name="passwordConfirmation"
            className="form-control"
          />
          <p className="validationMsg">{this.state.passConfError}</p>
        </div>
        <div className="form-group">
          <label className="control-label">Gender</label>
          <br />
          <label className="gender-label">
            <input
              className="form-control gender-btn"
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleUserInput}
            />
            Male
          </label>
          <label className="gender-label">
            <input
              className="form-control gender-btn"
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleUserInput}
            />
            Female
          </label>
          <p className="validationMsg">{this.state.genderError}</p>
        </div>

        <label className="control-label">Birthday</label>
        <br />
        <DatePicker
          placeholderText="Click to select a date"
          dateFormat="yyyy-MM-dd"
          selected={Date.parse(this.state.birthday)}
          onChange={this.handleBirthday}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
        <p className="validationMsg">{this.state.birthdayError}</p>
        <br />
        <div className="row form-group">
          <div className="terms">
            <input
              onChange={this.handleCheck}
              type="checkbox"
              name="terms"
              className="form-control terms-checkbox"
            />
            <p>
              I agree to the <a href="/terms">Terms and Conditions of Use</a>{" "}
            </p>
            <p className="validationMsg">{this.state.termsError}</p>
          </div>
        </div>
        <p className="signupError">{this.state.singupError}</p>
        <div className="form-group">
          <button className="btn btn-lg signup-btn">Sign up</button>
        </div>
        <p className="userCreated">{this.state.signupSuccessful}</p>
      </form>
    );
  }
}

export default withRouter(SignupForm);
