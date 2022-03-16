import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { IoIosCodeWorking } from "react-icons/io";
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
        href="#skills"
        rel="noreferrer"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BiBookBookmark />{" "}
      </a>
      <a
        href="#portfolio"
        rel="noreferrer"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <IoIosCodeWorking />{" "}
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
