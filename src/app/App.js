import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

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
import MusicPlayer from "./pages/MusicPlayer";

const history = createBrowserHistory();

class App extends Component {
	state = {
		userLogged: false
	}

	componentWillMount() {
    localStorage.getItem('userToken') && this.setState({
      userToken: localStorage.getItem('userToken')
    });
    localStorage.getItem('userId') && this.setState({
      userId: localStorage.getItem('userId')
    });
    localStorage.getItem('userName') && this.setState({
      userName: localStorage.getItem('userName')
    });
  }

  componentDidMount(){
    const date = localStorage.getItem('userDate');
    const userDate = date && +new Date(parseInt(date));
    const now = (+new Date());

    const dataAge = Math.round((now - userDate) / (1000*60));
    const oldData = dataAge >= 0.5;

    if(oldData) {
			console.log('Time is up');
			return (<Redirect to="/login" />)
    } else {
      console.log('Everything is fine');
    }
	}

  render() {
    return (
      <div className="app">
        {location.pathname !== "/player" &&
          location.pathname !== "/login" &&
          location.pathname !== "/signup" && <NavBar />}
        <Router history={history}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/player" component={MusicPlayer} />
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
        {location.pathname !== "/player" &&
          location.pathname !== "/login" &&
          location.pathname !== "/signup" && <Footer />}
      </div>
    );
  }
}

export default App;
