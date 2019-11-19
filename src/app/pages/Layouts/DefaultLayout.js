import React from "react";
import NavBar from "../../components/Nav/NavBar";
import Footer from "../../components/Footer/Footer";

//Component with 2 other components wrapping around children components
const DefaultLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);

export default DefaultLayout;
