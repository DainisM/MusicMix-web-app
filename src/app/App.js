import React, { Component } from "react";

import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
