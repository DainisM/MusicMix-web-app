import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm logo">
              <a href="/">THE LOGO</a>
              <p></p>
              <p>© 2019 MusicMix</p>
            </div>
            <div className="col-sm links">
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/api">Api</a>
                </li>
                <li>
                  <a href="/policies">Policies</a>
                </li>
              </ul>
            </div>
            <div className="col-sm social">
              <ul>
                <li>
                  <a className="icon fa fa-facebook" href="#"></a>
                </li>
                <li>
                  <a className="icon fa fa-instagram" href="#"></a>
                </li>
                <li>
                  <a className="icon fa fa-twitter" href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
