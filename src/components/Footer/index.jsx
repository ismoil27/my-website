import React from "react";
import "./footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        ISMOILJON
      </a>

      <ul className="links">
        <li>
          <a href="#">Home</a>{" "}
        </li>
        <li>
          <a href="#about">About</a>{" "}
        </li>
        <li>
          <a href="#skills">Skills</a>{" "}
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>{" "}
        </li>
        <li>
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>

      <div className="footer__icons">
        <a href="https://www.facebook.com/Ismoil Abduraimov/" rel="noreferrer">
          <FaFacebookF />{" "}
        </a>
        <a
          href="https://www.instagram.com/ismoiljon__abduraimov/"
          rel="noreferrer"
        >
          <FiInstagram />{" "}
        </a>
        <a href="https://www.twitter.com/Ismoiljon_A/" rel="noreferrer">
          <IoLogoTwitter />{" "}
        </a>
      </div>

      {/* <div className="footer__copyright">
        <small>&copy; Ismoiljon Abduraimov. All rights reserved </small>
      </div> */}
    </footer>
  );
};

export default Footer;
