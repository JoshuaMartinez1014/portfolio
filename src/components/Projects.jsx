import React from "react";
import "../styles/global.css";
import gradeBook from "../img/gradebook-screenshot.png";
import techBlog from "../img/tech-blog.png";
import cardinal from "../img/cardinal.png";

const Projects = () => {
  return (
    <section className="section-container">
      {" "}
      <div style={{ width: "88vw", borderTop: "solid yellow 4px" }}>
        <h1 style={{ color: "grey" }}>Projects</h1>
        <div style={{ borderBottom: "solid grey 1px", paddingBottom: "20px" }}>
          <a
            href="https://test-gradebook.herokuapp.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-img-container">
              <div
                className="project-img"
                style={{ backgroundImage: `url(${gradeBook})` }}
                aria-label="Screenshot of Gradebook Project"
              />
              <span className="visually-hidden">
                Screenshot of Gradebook Project
              </span>
            </div>
          </a>
          <h3>Gradebook</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            placeat, aliquid aperiam provident itaque voluptates.
          </p>
          <span style={{ display: "flex", justifyContent: "space-around" }}>
            <a
              href="https://test-gradebook.herokuapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="aboutme-btns" role="button">
                Deployed
              </button>
            </a>
            <br />
            <a
              href="https://github.com/JoshuaMartinez1014/gradebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="aboutme-btns" role="button">
                GitHub
              </button>
            </a>
          </span>
        </div>
        {/*  */}
        <div
          style={{ borderBottom: "solid grey 1px", padding: "20px 0 20px 0" }}
        >
          <a
            href="https://jmart-tech-blog.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-img-container">
              <div
                className="project-img"
                style={{ backgroundImage: `url(${techBlog})` }}
                aria-label="Screenshot of Gradebook Project"
              />
              <span className="visually-hidden">
                Screenshot of Gradebook Project
              </span>
            </div>
          </a>
          <h3>TechBlog</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            placeat, aliquid aperiam provident itaque voluptates.
          </p>
          <span style={{ display: "flex", justifyContent: "space-around" }}>
            <a
              href="https://jmart-tech-blog.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="aboutme-btns" role="button">
                Deployed
              </button>
            </a>
            <br />
            <a
              href="https://github.com/JoshuaMartinez1014/tech_blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="aboutme-btns" role="button">
                GitHub
              </button>
            </a>
          </span>
        </div>
        {/*  */}
        <div
          style={{ borderBottom: "solid grey 1px", padding: "20px 0 20px 0" }}
        >
          <a
            href="https://joshaumartine3.myportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-img-container">
              <div
                className="project-img"
                style={{ backgroundImage: `url(${cardinal})` }}
                aria-label="Screenshot of Gradebook Project"
              />
              <span className="visually-hidden">
                Screenshot of Gradebook Project
              </span>
            </div>
          </a>
          <h3>Graphic Design Work</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            placeat, aliquid aperiam provident itaque voluptates.
          </p>
          <span style={{ display: "flex", justifyContent: "space-around" }}>
            <a
              href="https://joshaumartine3.myportfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="aboutme-btns" role="button">
                Portfolio
              </button>
            </a>
          </span>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Projects;
