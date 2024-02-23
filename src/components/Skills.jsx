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
              <li>JavaScript</li>
              <li>Java</li>
              <li>React</li>
              <li>MongoDb</li>
              <li>MySql</li>
              <li>Adobe Suite</li>
              <li>Server Management</li>
            </ul>
            <p>
            I enjoy working with <strong>JavaScript</strong> and <strong>Java</strong>, but I am quickly <strong>adaptable</strong> to any coding language. With a good eye for design, I am able to handle <strong>creativity with CSS</strong>, while also having a strong understanding of <strong>accessibility</strong>. Additionally, I can quickly create visuals in <strong>Adobe Suite</strong>. I enjoy working with <strong>diverse teams</strong>, but I also have the ability to <strong>focus independently</strong> on projects.
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
