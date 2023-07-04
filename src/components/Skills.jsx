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
          fontSize: "1.2rem",
          marginTop: "65px",
          /*  backgroundColor: "lightgrey", */
          padding: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "70%",
          }}
        >
          <div style={{ width: "500px" }}>
            <h1>Skills</h1>

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
          <img
            src={skillIcons}
            style={{ height: "500px", width: "400px" }}
          ></img>
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default Skills;
