import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const HeaderIcons = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ismoiljon-abduraimov-4714391b9/"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsLinkedin />{" "}
      </a>
      <a
        href="https://github.com/MrIsmoiljon"
        target={"_blank"}
        rel="noreferrer"
      >
        <FaGithub />{" "}
      </a>
      <a href="https://facebook.com" target={"_blank"} rel="noreferrer">
        {" "}
        <BsFacebook />{" "}
      </a>
    </div>
  );
};

export default HeaderIcons;
