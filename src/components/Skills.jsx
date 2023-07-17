import React from "react";
import "../styles/global.css";
import skillIcons from "../img/skillsIcons.png";
import gradeBook from "../img/gradebook-screenshot.png";
import techBlog from "../img/tech-blog.png";
import cardinal from "../img/cardinal.png";
import design from "../img/design.png";

const Skills = () => {
  return (
    /*  width: "80%", marginLeft: "135px", */
    <>
      <section className="skills-section">
        <div className="skills-container">
          <article className="skills-article">
            <h2>Skills</h2>
            <br />
            <ul>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>MongoDb</li>
              <li>MySql</li>
              <li>Adobe Suite</li>
              <li>Communication</li>
            </ul>
            <p style={{ marginTop: "50px", width: "85%" }}>
              Expert in <strong>CSS</strong> and <strong>JavaScript</strong>, I
              create performant interfaces. I leverage React for responsive
              applications. My proficiency in <strong>MongoDB</strong> and{" "}
              <strong>MySQL</strong> aids in efficient data management. Skilled
              with the <strong>Adobe Suite</strong>, I design captivating
              visuals. My communication skills foster effective team
              collaboration and stakeholder engagement.
            </p>
          </article>
          <div
            className="skills-img"
            aria-label="landscape with mountains, grass, and water"
          ></div>
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default Skills;
