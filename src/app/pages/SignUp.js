import React from "react";
import SignupForm from "../components/SignUp/SignupForm";

class SignUp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <SignupForm />
          </div>
        </div>
        <div className="row">
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    );
  }
}

export default SignUp;
