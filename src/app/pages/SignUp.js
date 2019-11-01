import React from "react";
import SignupForm from "../components/SignUp/SignupForm";

class SignUp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 main-form">
            <SignupForm />
            <p className="login-teaser">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
