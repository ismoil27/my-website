import React from "react";
import "./portfolio.css";

import { portfolio } from "../../utilities/portfolio";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolio.map((value) => (
          <article key={value.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={value.img} alt="" />
            </div>
            <h3>{value.title} </h3>
            <div className="portfolio__item-cta">
              <a
                href={value.github}
                rel="noreferrer"
                className="btn"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href={value.demo}
                rel="noreferrer"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
      {/* 
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Houzing} alt="" />
          </div>
          <h3>Houzing Project</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/MrIsmoiljon/houzing-project"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://houzing-project.netlify.app/"
              rel="noreferrer"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div> */}
    </section>
  );
};

export default Portfolio;
