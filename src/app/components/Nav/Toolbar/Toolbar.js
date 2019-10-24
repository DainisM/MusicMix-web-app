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
        <a href="/">THE LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <a href="/help">Help</a>
          </li>
          <li>
            <a href="/download">Download</a>
          </li>
          <div className="space">|</div>
          <li>
            <a href="/signup">Sign up</a>
          </li>
        </ul>
        <button>Login</button>
      </div>
    </nav>
  </header>
);

export default Toolbar;
