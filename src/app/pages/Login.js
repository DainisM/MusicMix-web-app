import React from "react";
import LoginForm from "../components/Login/LoginForm";
import NoWrapLayout from "../pages/Layouts/NoWrapLayout";

class Login extends React.Component {
  render() {
    return (
      <NoWrapLayout>
        <div className="container">
          <div className="row login-logo">
            <a href="/">
              <img
                src={require("../images/MusicMix_logo.png")}
                alt="MuscixMix logo"
              />
            </a>
          </div>
          <div className="row">
            <div className="col-md-5 main-form">
              {/*Calling LoginForm component*/}
              <LoginForm />
              <p>
                Don´t have an account? <a href="/signup">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </NoWrapLayout>
    );
  }
}

export default Login;
