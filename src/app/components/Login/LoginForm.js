import React from "react";
import "./LoginForm.css";

const url = "http://music-mix.live/users/login";
const header = new Headers();
header.append("Content-Type", "application/json");
const request = new Request(url);

const initialState = {
  email: "",
  password: "",
  authError: "",
  loginSuccessful: "",
  inputError: ""
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let inputError = "";

    if (this.state.email == "" && this.state.password == "") {
      inputError = "Please enter your email and password!";
    } else if (this.state.password == "") {
      inputError = "Please enter your password!";
    } else if (this.state.email == "") {
      inputError = "Please enter your email!";
    }

    if (inputError) {
      this.setState({ inputError });
      return false;
    }
    return true;
  };

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const myInit = {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
        headers: header
      };

      fetch(request, myInit)
        .then(response => {
          if (response.status == 401) {
            let authError = "Email and/or password incorrect!";
            this.setState({ authError });
          }
          console.log(response);
          return response.json();
        })
        .then(function(data) {
          console.log(
            "Token: " +
              data.token +
              ",  ID:" +
              data.id +
              ", Username: " +
              data.username
          );
        })
        .catch(error => {
          console.log(error);
        });
      //Clear the form
      this.setState(initialState);
    }
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h3>Login with your emil address</h3>
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
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.handleUserInput}
            type="password"
            name="password"
            className="form-control"
          />
        </div>
        <p className="loginErrorMsg">
          {this.state.authError}
          {this.state.inputError}
        </p>
        <div className="form-group">
          <button className="btn btn-lg signup-btn">Log in</button>
        </div>
        <p className="userCreated">{this.state.signupSuccessful}</p>
      </form>
    );
  }
}

export default LoginForm;
