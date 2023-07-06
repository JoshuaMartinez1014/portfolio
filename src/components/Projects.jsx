import React from "react";
import "../styles/global.css";
import gradeBook from "../img/gradebook-screenshot.png";
import techBlog from "../img/tech-blog.png";
import cardinal from "../img/cardinal.png";
import design from "../img/design.png";
import arrow from "../img/right-arrow.png";

const Projects = () => {
  return (
    <section
      style={{
        marginTop: "100px",
        marginLeft: "135px",
        marginBottom: "100px",
        width: "81%",
      }}
    >
      <h2>Projects</h2>
      <br />
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="card"
          style={{
            width: "42%",
            backgroundColor: "black",
            borderRadius: "15px",
          }}
        >
          <div style={{ padding: "30px", color: "white", height: "30%" }}>
            <h2 className="project-h2">Adobe Portfolio</h2>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>Created using Illustrator or PhotoShop</p>
              <br />
              <a href="#">
                <button className="button-54">Portfolio</button>
              </a>
            </span>
          </div>
          <div className="design"></div>
        </div>
        <div
          className="card"
          style={{
            width: "55%",
            backgroundColor: "white",
            borderRadius: "15px",
          }}
        >
          <div style={{ padding: "30px", color: "black", height: "31%" }}>
            <h2 className="project-h2-black">Gradebook</h2>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
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
          <div className="design1"></div>
        </div>
      </div>
      {/*  */}
      <br />
      <br />
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <div
          className="card"
          style={{
            width: "55%",
            backgroundColor: "white",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              padding: "30px",
              color: "black",
              height: "30%",
            }}
          >
            <h2 className="project-h2-black">TechBlog</h2>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
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
          <div className="design2"></div>
        </div>
        <div
          className="card"
          style={{
            width: "42%",
            backgroundColor: "black",
            borderRadius: "15px",
          }}
        >
          <div style={{ padding: "30px", color: "white", height: "30%" }}>
            <h2 className="project-h2">Movie Quiz</h2>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>Simple & Fun Movie Quiz</p>
              <br />
              <a href="#">
                <button className="button-54">Portfolio</button>
              </a>
            </span>
          </div>
          <div className="design3"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
