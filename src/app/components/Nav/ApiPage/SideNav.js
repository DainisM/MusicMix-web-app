import React from "react";

const SideNav = () => {
  return (
    <aside className="menu">
      <ul>
        <li>
          <a href="#api">Intro</a>
        </li>
        <li>
          <a href="#requests">Requests</a>
        </li>
        <li>
          <a href="#response-status-codes">Response Status Codes</a>
        </li>
        <li>
          <a href="#authorization">Authorization</a>
        </li>
        <li>
          {" "}
          <a href="#api-endpoints">API Endpoints</a>
          <ul className="submenu">
            <li>
              <a href="#get-users-profile">GET User´s profile</a>
            </li>
            <li>
              <a href="#patch-users-profile">PATCH User´s profile</a>
            </li>
            <li>
              <a href="#get-tracks">GET Tracks</a>
            </li>
            <li>
              <a href="#get-trackId">GET Specific Track</a>
            </li>
            <li>
              <a href="#get-artists">GET Artists</a>
            </li>
            <li>
              <a href="#get-specific-artist">GET Specific Artist</a>
            </li>
            <li>
              <a href="#get-all-artist-tracks">GET All Artist Tracks</a>
            </li>
            <li>
              <a href="#search-tracks">Search for tracks</a>
            </li>
            <li>
              <a href="#search-artists">Search for artists</a>
            </li>
            <li>
              <a href="#get-newest-tracks">GET Newest Tracks</a>
            </li>
            <li>
              <a href="#get-genres">GET Genres</a>
            </li>
            <li>
              <a href="#get-specific-genre">GET Genre Tracks</a>
            </li>
            <li>
              <a href="#get-moods">GET Moods</a>
            </li>
            <li>
              <a href="#get-specific-moods">GET Specific Mood</a>
            </li>
            <li>
              <a href="#get-user-playlists">GET User Playlists</a>
            </li>
            <li>
              <a href="#get-user-playlist-tracks">GET Playlist Tracks</a>
            </li>
            <li>
              <a href="#post-user-playlist">POST User Playlist</a>
            </li>
            <li>
              <a href="#patch-user-playlist">PATCH User Playlist</a>
            </li>
            <li>
              <a href="#remove-playlist-track">Remove Playlist Track</a>
            </li>
            <li>
              <a href="#delete-user-playlist">DELETE User Playlist</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;
