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
      <section
        className="skills-section"
        style={{
          marginTop: "100px",
          marginLeft: "135px",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "500px" }}>
            <h2>Skills</h2>

            <ul>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>MongoDb</li>
              <li>MySql</li>
              <li>Adobe Suite</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea
              praesentium tempora dolores quia blanditiis odit animi laudantium
              aliquam cum repellat maiores sit facere, dolor quis, incidunt
              maxime optio rerum.
            </p>
          </div>
          <div className="skills-img"></div>
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default Skills;
