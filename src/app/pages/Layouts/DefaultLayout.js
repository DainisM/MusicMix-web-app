import React from "react";
import NavBar from "../../components/Nav/NavBar";
import Footer from "../../components/Footer/Footer";

const DefaultLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);

export default DefaultLayout;
