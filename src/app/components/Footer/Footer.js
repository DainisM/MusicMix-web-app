import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm logo">
              <a href="/">
                <img
                  src={require("../../images/MusicMix_logo.png")}
                  width="100"
                  height="50"
                  alt="MusicMix Logo"
                />
              </a>
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
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms and Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-sm social">
              <ul>
                <li>
                  <a
                    className="icon fa fa-facebook"
                    target="blank"
                    href="https://facebook.com"
                  ></a>
                </li>
                <li>
                  <a
                    className="icon fa fa-instagram"
                    target="blank"
                    href="https://instagram.com"
                  ></a>
                </li>
                <li>
                  <a
                    className="icon fa fa-twitter"
                    target="blank"
                    href="https://twitter.com"
                  ></a>
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
