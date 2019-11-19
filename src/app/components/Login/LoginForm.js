import React from "react";
import { withRouter } from "react-router";
import "./LoginForm.css";

// API Authorization
const url = "http://api.music-mix.live/users/login";
const header = new Headers();
header.append("Content-Type", "application/json");
const request = new Request(url);

// Initial state objects
const initialState = {
  email: "",
  password: "",
  authError: "",
  loginSuccessful: "",
  inputError: "",
  userToken: "",
  userId: "",
  userName: ""
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  // state set to initialState
  state = initialState;

  // Method for setting localStorage items (Initialazed on render)
  componentWillMount() {
    localStorage.getItem("userToken") &&
      this.setState({
        userToken: localStorage.getItem("userToken")
      });
    localStorage.getItem("userId") &&
      this.setState({
        userId: localStorage.getItem("userId")
      });
    localStorage.getItem("userName") &&
      this.setState({
        userName: localStorage.getItem("userName")
      });
  }

  // Method for redirecting user after 0.5 sec
  redirect() {
    setTimeout(() => {
      this.props.history.push("/");
    }, 500);
  }

  //Method for handling user inputs
  handleUserInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //Method for validating user inputs
  validate = () => {
    let inputError = "";

    if (this.state.email == "" && this.state.password == "") {
      inputError = "Please enter your email and password!";
    } else if (this.state.password == "") {
      inputError = "Please enter your password!";
    } else if (this.state.email == "") {
      inputError = "Please enter your email!";
    }

    //If inputs is not validated set errors to error state and return false
    if (inputError) {
      this.setState({ inputError });
      return false;
    }

    //Else return true
    return true;
  };

  //Method for submitting user input and fetching data
  handleSubmit(e) {
    let self = this;
    e.preventDefault();
    //Invoke validate method
    const isValid = this.validate();
    //If validate method returns true continue and set API call body data
    if (isValid) {
      const myInit = {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
        headers: header
      };
      //Fetch data and set data into state objects
      fetch(request, myInit)
        .then(response => {
          if (response.ok) {
            response.json().then(function(data) {
              self.setState({
                userToken: data.token,
                userId: data.id,
                userName: data.username,
                userLogged: true
              });
            });
            //Clear the form and redirect user
            this.setState(initialState);
            this.redirect();
          }
          //If response is 401 set "authError" into state
          else if (response.status == 401) {
            let authError = "Email and/or password incorrect!";
            this.setState({ authError });
          }
        })
        //Catch other errors
        .catch(error => {
          console.log(error);
          let authError =
            "Service temporarily unavailable. Please try again later or contact server admin.";
          this.setState({ authError });
        });
    }
  }

  // Method which will update localStorage items if there is newer version of items
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userId", nextState.userId);
    localStorage.setItem("userName", nextState.userName);
    localStorage.setItem("userToken", nextState.userToken);
    localStorage.setItem("userDate", Date.now());
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h3>Login with your emil address</h3>
        {/*Div with label and input for email*/}
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
        {/*Div with label and input for password*/}
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
        {/*P tags for error messages*/}
        <p className="loginErrorMsg">
          {this.state.authError}
          {this.state.inputError}
        </p>
        {/*Div with button to trigger "Login" (fetch data and if successfull redirect)*/}
        <div className="form-group">
          <button className="btn btn-lg signup-btn">Log in</button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);
