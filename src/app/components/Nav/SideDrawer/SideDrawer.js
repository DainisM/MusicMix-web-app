import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer open"];
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {/* <li>
          <a href="/download">Download</a>
        </li> */}
        <li
          style={{
            display: localStorage.getItem("userId") ? "block" : "none"
          }}
        >
          <a href="/profile">Profile</a>
        </li>
        <li
          style={{
            display: localStorage.getItem("userId") ? "none" : "block"
          }}
        >
          <a href="/signup">Sign up</a>
        </li>
        <li
          style={{
            display: localStorage.getItem("userId") ? "none" : "block"
          }}
        >
          <a href="/login">Login</a>
        </li>
        <a
          href="/"
          style={{
            display: localStorage.getItem("userId") ? "block" : "none"
          }}
        >
          <button
            className="logoutbutton-sideDrawer"
            onClick={() => window.localStorage.clear()}
          >
            Logout
          </button>
        </a>
      </ul>
    </nav>
  );
};

export default sideDrawer;
