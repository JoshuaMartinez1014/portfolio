import React from "react";
import "../styles/global.css";
import gradeBook from "../img/gradebook-screenshot.png";
import techBlog from "../img/tech-blog.png";

const Projects = () => {
  return (
    <section className="section-container">
      {" "}
      <div style={{ width: "88vw", borderTop: "solid yellow 4px" }}>
        <h1 style={{ color: "grey" }}>Projects</h1>
        <div>
          <div className="project-img-container">
            <div
              className="project-img"
              style={{ backgroundImage: `url(${gradeBook})` }}
            />
          </div>
          <h3>Gradebook</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            placeat, aliquid aperiam provident itaque voluptates.
          </p>
        </div>
        <div>
          <div className="project-img-container">
            <div
              className="project-img"
              style={{ backgroundImage: `url(${techBlog})` }}
            />
          </div>
          <h3>Gradebook</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            placeat, aliquid aperiam provident itaque voluptates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
