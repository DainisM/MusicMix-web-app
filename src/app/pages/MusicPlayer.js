import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

//Other component imports
import Featured from "../components/MusicPlayer/Featured/Featured";
import Newest from "../components/MusicPlayer/Featured/Newest";
import Tops from "../components/MusicPlayer/Featured/Tops";
import Search from "../components/MusicPlayer/Search/Search";
import Genres from "../components/MusicPlayer/Genres/Genres";
import Genre from "../components/MusicPlayer/Genres/Genre";
import Moods from "../components/MusicPlayer/Moods/Moods";
import Mood from "../components/MusicPlayer/Moods/Mood";
import Playlist from "../components/MusicPlayer/Playlists/Playlist";
import Artist from "../components/MusicPlayer/Artist/Artist";

import "./styles/MusicPlayer.css";

const history = createBrowserHistory();

//Component which holds router and routes to all imported components
const MusicPlayer = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/player" component={Featured} exact />
        <Route path="/player/newest" component={Newest} />
        <Route path="/player/tops/:topId" component={Tops} />
        <Route path="/player/search" component={Search} />
        <Route path="/player/genres" component={Genres} exact />
        <Route path="/player/genres/:genreId" component={Genre} />
        <Route path="/player/moods" component={Moods} exact />
        <Route path="/player/moods/:moodId" component={Mood} />
        <Route path="/player/playlist/:playlistId" component={Playlist} />
        <Route path="/player/artist/:artistId" component={Artist} />
      </Switch>
    </Router>
  );
};

export default MusicPlayer;
