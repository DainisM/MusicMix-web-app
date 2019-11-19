import React from "react";
import "./DrawerToggleButton.css";

//Component for "Burger menu" button
const DrawerToggleButton = props => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
    </button>
  );
};

export default DrawerToggleButton;
