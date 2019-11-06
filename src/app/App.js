import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Download from "./pages/Download";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import Api from "./pages/Api";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Help from "./pages/Help";

class App extends Component {
  render() {
    return (
      <div className="app">
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <NavBar />
        )}
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/download" component={Download} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/api" component={Api} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/help" component={Help} />
          </Switch>
        </Router>
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Footer />
        )}
      </div>
    );
  }
}

export default App;
