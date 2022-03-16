import React from "react";
import "./portfolio.css";
import Greenshop from "../../assets/images/greenshop.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Greenshop} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a
            href="https://github.com/MrIsmoiljon/greenshop"
            rel="noreferrer"
            className="btn"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://github.com/MrIsmoiljon"
            rel="noreferrer"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
