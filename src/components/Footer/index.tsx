import React from "react";
import manualLogoLarge from "assets/img/manual-symbol-large.svg";
import facebookLogo from "assets/img/facebook.svg";
import twitterLogo from "assets/img/twitter.svg";
import linkedinLogo from "assets/img/linkedin.svg";

import "./index.scss";

const Footer = () => (
  <div className="footer">
    <div className="row">
      <img src={manualLogoLarge} className="logo" alt="Manual" />
      <div className="links-container">
        <ul className="single-row product">
          <li>Product</li>

          <li>
            <a href="https://www.manual.co/">Popular</a>
          </li>
          <li>
            <a href="https://www.manual.co/">Trending</a>
          </li>
          <li>
            {" "}
            <a href="https://www.manual.co/">Guided</a>
          </li>
          <li>
            <a href="https://www.manual.co/">Products</a>
          </li>
        </ul>
        <ul className="single-row company">
          <li>Company</li>

          <li>
            <a href="https://www.manual.co/">Press Releases</a>
          </li>
          <li>
            <a href="https://www.manual.co/">Mission</a>
          </li>
          <li>
            <a href="https://www.manual.co/">Strategy</a>
          </li>
          <li>
            <a href="https://www.manual.co/">About</a>
          </li>
        </ul>

        <ul className="single-row info">
          <li>Info</li>

          <li>
            <a href="https://www.manual.co/">Support</a>
          </li>
          <li>
            <a href="https://www.manual.co/">Customer Service</a>
          </li>
          <li>
            <a href="https://www.manual.co/">Get Started Guide</a>
          </li>
        </ul>

        <ul className="single-row social-media">
          <li>Follow us</li>

          <li className="social-icons">
            <a href="https://www.manual.co/">
              <img
                className="social-media-logo facebook"
                src={facebookLogo}
                alt="facebook"
              />
            </a>
            <a href="https://www.manual.co/">
              <img
                className="social-media-logo twitter"
                src={twitterLogo}
                alt="twitter"
              />
            </a>
            <a href="https://www.manual.co/">
              <img
                className="social-media-logo linkedin"
                src={linkedinLogo}
                alt="linkedin"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="copyright-text">© 2019 Manual. All rights reserved.</div>
  </div>
);

export default Footer;
