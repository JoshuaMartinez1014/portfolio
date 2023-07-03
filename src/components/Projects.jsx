import React from "react";
import "../styles/global.css";
import gradeBook from "../img/gradebook-screenshot.png";
import techBlog from "../img/tech-blog.png";
import cardinal from "../img/cardinal.png";
import design from "../img/design.png";

const Projects = () => {
  return (
    <section
      style={{
        marginTop: "30px",
        marginLeft: "135px",
        width: "80%",
      }}
    >
      <h2>Projects</h2> <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div
            className="project-container"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <a href="#gradebook">
              <img
                src={gradeBook}
                style={{
                  height: "220px",
                  width: "400px",
                  borderRadius: "15px",
                }}
              />
            </a>
          </div>

          <br />

          <h4>GradeBook</h4>
          <p>Grade keeping and scoring application</p>
          <span style={{ display: "flex" }}>
            <button>Github</button>
            <button>Deployed</button>
          </span>
        </div>
        <div>
          <div
            className="project-container"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <a href="#techblog">
              <img
                src={techBlog}
                style={{
                  height: "220px",
                  width: "400px",
                  borderRadius: "15px",
                }}
              />
            </a>
          </div>{" "}
          <br />
          <h4>Tech Blog</h4>
          <p>Social media blog application</p>
          <span style={{ display: "flex" }}>
            <button>Github</button>
            <button>Deployed</button>
          </span>
        </div>
        <div>
          <div
            className="project-container"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <a href="#adobe portfolio">
              <img
                src={design}
                style={{
                  height: "220px",
                  width: "400px",
                  borderRadius: "15px",
                }}
              />
            </a>
          </div>{" "}
          <br />
          <h4>Graphic Design Porfolio</h4>
          <p>Projects made with adobe software</p>
          <span style={{ display: "flex" }}>
            <button>Github</button>
            <button>Deployed</button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
