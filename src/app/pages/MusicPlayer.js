import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Browse from "../components/MusicPlayer/Browse";
import Search from "../components/MusicPlayer/Search/Search";
import Genres from "../components/MusicPlayer/Genres/Genres";
import Genre from "../components/MusicPlayer/Genres/Genre";
import Moods from "../components/MusicPlayer/Moods";
import Playlist from "../components/MusicPlayer/Playlists/Playlist";
import Artist from "../components/MusicPlayer/Artist/Artist";

import "./styles/MusicPlayer.css";

const history = createBrowserHistory();

const MusicPlayer = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/player" component={Browse} exact />
        <Route path="/player/search" component={Search} />
        <Route path="/player/genres" component={Genres} exact />
        <Route path="/player/genres/:genreId" component={Genre} />
        <Route path="/player/moods" component={Moods} />
        <Route path="/player/playlist/:playlistId" component={Playlist} />
        <Route path="/player/artist/:artistId" component={Artist} />
      </Switch>
    </Router>
  );
};

export default MusicPlayer;
