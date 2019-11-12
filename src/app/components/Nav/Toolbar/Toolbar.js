import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">
          <img
            src={require("../../../images/MusicMix_logo.png")}
            alt="MusicMix Logo"
          />
        </a>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <a href="/help">Help</a>
          </li>
          {/* <li>
            <a href="/download">Download</a>
          </li> */}
          <div className="space">|</div>
          <div className="profile">
            <li
              style={{
                display: localStorage.getItem("userId") ? "block" : "none"
              }}
            >
              <a href="/profile" className="profileLink">
                <img
                  className="profileImg"
                  src={require("../../../images/UserIcon.png")}
                  alt="Profile icon"
                  width="25"
                  height="25"
                />
                {localStorage.getItem("userName")}
              </a>
              {/* <a href="/profile">{localStorage.getItem("userName")}</a> */}
            </li>
          </div>
          <li>
            <a
              href="/signup"
              style={{
                display: localStorage.getItem("userId") ? "none" : "block"
              }}
            >
              Sign up
            </a>
          </li>
          <li className="loginLink">
            <a
              href="/login"
              style={{
                display: localStorage.getItem("userId") ? "none" : "block"
              }}
            >
              Login
            </a>
          </li>
          <a
            href="/"
            style={{
              display: localStorage.getItem("userId") ? "block" : "none"
            }}
          >
            <button
              className="logoutbutton"
              onClick={() => window.localStorage.clear()}
            >
              Log out
            </button>
          </a>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
