import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { RiMessage3Line } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("");
  return (
    <nav>
      <a
        href="#"
        rel="noreferrer"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />{" "}
      </a>
      <a
        href="#about"
        rel="noreferrer"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />{" "}
      </a>
      <a
        href="#experience"
        rel="noreferrer"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />{" "}
      </a>
      <a
        href="#services"
        rel="noreferrer"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />{" "}
      </a>
      <a
        href="#contact"
        rel="noreferrer"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiMessage3Line />{" "}
      </a>
    </nav>
  );
};

export default Nav;
