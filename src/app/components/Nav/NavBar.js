import React from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

class NavBar extends React.Component {
  //State object
  state = {
    sideDrawerOpen: false
  };

  //Method which toggles burger menu button clicked
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  //Method which toggles side menu displayability
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    //If side menu is opened call Backdrop component and invoke backdropClickHandler method
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default NavBar;
