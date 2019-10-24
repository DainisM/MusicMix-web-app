import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Download from "./pages/Download";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Api from "./pages/Api";
import Policies from "./pages/Policies";
import Help from "./pages/Help";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/download" component={Download} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/api" component={Api} />
            <Route path="/policies" component={Policies} />
            <Route path="/help" component={Help} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
