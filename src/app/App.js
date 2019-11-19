import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

//Other component imports
import Home from "./pages/Home";
import Download from "./pages/Download";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import Api from "./pages/Api";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Help from "./pages/Help";
import MusicPlayer from "./pages/MusicPlayer";
import Profile from "./pages/Profile";

const history = createBrowserHistory();

class App extends Component {
  //Method which checks if userId in localstorage is older than 8 hours then delete
  // userId from localStorage and redirect user to login
  componentDidMount() {
    const date = localStorage.getItem("userDate");
    const userDate = +new Date(parseInt(date));
    const now = +new Date();

    const dataAge = Math.round((now - userDate) / (1000 * 60)); // in minutes
    const tooOld = dataAge >= 480;

    if (localStorage.getItem("userId")) {
      if (tooOld) {
        alert("Login timeout! Please log in again!");
        console.log(userDate);
        console.log(now);
        console.log(dataAge);
        history.push("/login");
        localStorage.clear();
      }
    }
  }

  //Router and routes for imported components
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/player" component={MusicPlayer} />
            <Route path="/download" component={Download} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/api" component={Api} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/help" component={Help} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
