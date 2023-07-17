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
            <p>
              I enjoy working with <strong>CSS</strong> and{" "}
              <strong>JavaScript</strong> to build solid interfaces. I use{" "}
              <strong>React</strong> to make apps responsive, and I'm good with
              handling data in <strong>MongoDB</strong> and{" "}
              <strong>MySQL</strong>. I can also whip up visuals using the{" "}
              <strong>Adobe Suite</strong>. Beyond tech, I value open{" "}
              <strong>communication</strong> and enjoy working in a team.
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
