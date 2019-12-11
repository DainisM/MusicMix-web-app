import React from "react";

//Component with links to divs displayed at side
const SideNav = () => {
  return (
    <aside className="menu">
      <ul className="mainItems">
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
              <a href="#users-profile">User´s profile</a>
            </li>
            <li>
              <a href="#tracks">Tracks</a>
            </li>
            <li>
              <a href="#artists">Artists</a>
            </li>
            <li>
              <a href="#search">Search</a>
            </li>
            <li>
              <a href="#newest">Newest Tracks</a>
            </li>
            <li>
              <a href="#genres">Genres</a>
            </li>
            <li>
              <a href="#moods">Moods</a>
            </li>
            <li>
              <a href="#tops">Tops</a>
            </li>
            <li>
              <a href="#user-playlists">User Playlists</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;
