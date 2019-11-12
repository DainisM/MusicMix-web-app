import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Browse from "../components/MusicPlayer/Browse";
import Search from "../components/MusicPlayer/Search";
import Genres from "../components/MusicPlayer/Genres";
import Moods from "../components/MusicPlayer/Moods";

import "./styles/MusicPlayer.css";

const history = createBrowserHistory();

const MusicPlayer = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/player" component={Browse} exact />
        <Route path="/player/search" component={Search} />
        <Route path="/player/genres" component={Genres} />
        <Route path="/player/moods" component={Moods} />
      </Switch>
    </Router>
  );
};

export default MusicPlayer;
