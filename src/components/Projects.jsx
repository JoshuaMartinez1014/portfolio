import React from "react";
import "../styles/global.css";
import gradeBook from "../img/gradebook-screenshot.png";
import techBlog from "../img/tech-blog.png";
import cardinal from "../img/cardinal.png";
import design from "../img/design.png";
import arrow from "../img/right-arrow.png";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <br />
      <div className="projects-top">
        <div className="card42" style={{ backgroundColor: "black" }}>
          <div className="card-header" style={{ color: "white" }}>
            <h2 className="project-h2">Adobe Portfolio</h2>
            <span className="card-info">
              <p>Created using Illustrator or PhotoShop</p>
              <br />
              <a href="#">
                <button className="button-54">Portfolio</button>
              </a>
            </span>
          </div>
          <div
            className="design"
            aria-label="Joshua Martinez's adobe portfolio website screenshot, showing 4 design images. 1. red bird, 2. concert poster with a skull, 3. a pear energy drink, 4. retro game controller ad"
          ></div>
        </div>
        <div
          className="card55"
          style={{ backgroundColor: "white", border: "solid grey 1px" }}
        >
          <div className="card-header" style={{ color: "black" }}>
            <h2 className="project-h2-black">Gradebook</h2>
            <span className="card-info">
              <p>Grading and Scoring Application - made in React</p>{" "}
              <span>
                <a href="#">
                  <button className="button-55">Live Site</button>
                </a>
                <a href="#">
                  <button className="button-55">GitHub</button>
                </a>
              </span>
            </span>
          </div>
          {/*  <img src={gradeBook} style={{ height: "250px" }} /> */}
          <div
            className="design1"
            aria-label="gradebook website screenshot, header says gradebook, the body has a large image of students sitting together"
          ></div>
        </div>
      </div>
      {/*  */}
      <br />
      <br />
      <div className="projects-bottom">
        {" "}
        <div
          className="card55"
          style={{
            backgroundColor: "white",
            border: "solid grey 1px",
          }}
        >
          <div
            className="card-header"
            style={{
              color: "black",
            }}
          >
            <h2 className="project-h2-black">TechBlog</h2>
            <span className="card-info">
              <p>Social Blog Site for Technology Information</p>{" "}
              <span>
                <a href="#">
                  <button className="button-55">Live Site</button>
                </a>
                <a href="#">
                  <button className="button-55">GitHub</button>
                </a>
              </span>
            </span>
          </div>
          {/*  <img src={gradeBook} style={{ height: "250px" }} /> */}
          <div
            className="design2"
            aria-label="tech blog website screenshot, header says The Tech Blog with 2 blog posts below, titles are 10 tips for Writing Clean Code, and the other as understanding Recursion in Javascript"
          ></div>
        </div>
        <div
          className="card42"
          style={{
            backgroundColor: "black",
          }}
        >
          <div className="card-header" style={{ color: "white" }}>
            <h2 className="project-h2">Movie Quiz</h2>
            <span className="card-info">
              <p>Simple & Fun Movie Quiz</p>
              <br />
              <a href="#">
                <button className="button-54">Portfolio</button>
              </a>
            </span>
          </div>
          <div
            className="design3"
            aria-label="movie quiz webpage screenshot, header says movie quiz with a timer at 49 seconds, and a question box asking what pill did Neo take in the Matrix"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
