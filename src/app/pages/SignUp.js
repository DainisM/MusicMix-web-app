import React from "react";
import SignupForm from "../components/SignUp/SignupForm";
import NoWrapLayout from "../pages/Layouts/NoWrapLayout";

class SignUp extends React.Component {
  render() {
    return (
      <NoWrapLayout>
        <div className="container">
          <div className="row signup-logo">
            <a href="/">
              <img
                src={require("../images/MusicMix_logo.png")}
                alt="MuscixMix logo"
              />
            </a>
          </div>
          <div className="row">
            <div className="col-md-5 main-form">
              {/*Calling SignupForm component*/}
              <SignupForm />
              <p className="login-teaser">
                Already have an account? <a href="/login">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </NoWrapLayout>
    );
  }
}

export default SignUp;
