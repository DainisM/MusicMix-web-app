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
        <li>
          <a href="/signup">Sign up</a>
        </li>
        <button>Login</button>
      </ul>
    </nav>
  );
};

export default sideDrawer;
