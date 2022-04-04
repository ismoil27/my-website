import React from "react";
import "./header.css";
import { Container, ImageWrapper } from "./style";
import CTA from "./CTA";
import ME from "../../assets/me2.JPG";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
  return (
    <header>
      <Container className="header__container">
        <h5>Hello, I'm</h5>
        <h1>Ismoiljon</h1>
        <h5 className="text-light">React Developer</h5>
        <CTA />
        <HeaderIcons />
        <ImageWrapper className="me">
          <img className="me__header" src={ME} alt="" />
        </ImageWrapper>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </Container>
    </header>
  );
};

export default Header;
