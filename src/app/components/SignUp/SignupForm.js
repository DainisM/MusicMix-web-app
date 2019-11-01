import moment from "moment";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SignupForm.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
      birthday: "",
      gender: "",
      terms: false
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
  }

  handleUserInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleBirthday = date => {
    this.setState({ birthday: moment(date).format("YYYY-MM-DD") });
  };

  handleCheck(e) {
    this.setState({ terms: !this.state.terms });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign up</h1>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.handleUserInput}
            type="email"
            name="email"
            className="form-control"
          />
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
        </div>
        <div className="form-group">
          <label className="control-label">Gender</label>
          <br />
          <label className="gender-label">
            <input
              className="form-control"
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleUserInput}
            />
            Male
          </label>
          <label className="gender-label">
            <input
              className="form-control"
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleUserInput}
            />
            Female
          </label>
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

        <br />
        <br />
        <div className="form-group terms">
          <input
            onChange={this.handleCheck}
            type="checkbox"
            name="terms"
            className="form-control terms-checkbox"
          />
          <p>
            I agree to the <a href="/terms">Terms and Conditions of Use</a>{" "}
          </p>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign up</button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
