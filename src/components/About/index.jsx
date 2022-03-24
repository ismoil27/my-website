import React from "react";
import "./about.css";
import ME from "../../assets/portfolio.jpeg";
import { FaAward } from "react-icons/fa";
import { VscRootFolderOpened } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me-img">
          <img src={ME} alt="" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Making Projects</small>
            </article>

            <article className="about__card">
              <VscRootFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed </small>
            </article>
          </div>

          <p>
            I've been learning HTML, CSS, JavaScript, ReactJS for couple of
            years and it's been an amazing time for myself. I am a junior
            developer. I have build more than 10 projects individually.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
