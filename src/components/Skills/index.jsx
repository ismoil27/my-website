import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { data } from "./mockdata";
import { Container } from "./style";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="conatiner experience__container">
        <div className="experinece__frontend">
          <h3>Frontend Development</h3>
          <Container className="experience__content">
            {data.map((value) => (
              <article key={value.id} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{value.language}</h4>
                  <small className="text-light">{value.experience}</small>
                </div>
              </article>
            ))}
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Skills;
