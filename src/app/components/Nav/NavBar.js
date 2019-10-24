import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

import Home from "../../pages/Home";
import Download from "../../pages/Download";
import SignUp from "../../pages/SignUp";
import About from "../../pages/About";
import Api from "../../pages/Api";
import Policies from "../../pages/Policies";
import Help from "../../pages/Help";

export default class Navigation extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/download" component={Download} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/api" component={Api} />
            <Route path="/policies" component={Policies} />
            <Route path="/help" component={Help} />
          </Switch>
        </div>
      </Router>
    );
  }
}
