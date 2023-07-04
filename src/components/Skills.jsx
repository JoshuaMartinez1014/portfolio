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
      <div
        className="homepage-container"
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "70px",
          justifyContent: "space-around",
          backgroundColor: "lightgrey",
        }}
      >
        <div
          className="homepage-section"
          style={{
            width: "40%",
            borderRadius: "15px",
            padding: "20px",
            marginTop: "15px",
            minHeight: "400px",
          }}
        >
          <div>
            <div style={{ fontSize: "3rem" }}>
              <strong>Gradebook</strong>
            </div>
            <br />
            <p style={{ fontSize: "1.1rem" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;This application exhibits a student's
              grades in a simple and organized manner. The overall goal of the
              application is to organize grade information in a way that makes
              sense and can be quickly viewed by users. Grades can be seen by a
              user that is a teacher or a student. New users must sign up to
              access most of the application and returning users can log in. The
              server-side code is heavily dependent on Express, MongoDB, and
              Mongoose while the client-side mainly uses React. There are four
              models used in the creation of this application: User, Grade,
              Class, and Assignment.
            </p>
            <span style={{ display: "flex" }}>
              <button>GitHub</button>
              <button>Live Site</button>
            </span>
          </div>
        </div>
        {/*  */}
        <div
          className="homepage-section"
          style={{
            marginTop: "40px",
            width: "40%",
            borderRadius: "15px",
            padding: "20px",
            marginTop: "15px",
            minHeight: "400px",
          }}
        >
          <img
            src={techBlog}
            style={{
              /*  height: "200px", */
              width: "100%",
              borderRadius: "15px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.7)",
            }}
          ></img>
        </div>
        {/*  */}
      </div>{" "}
    </>
  );
};

export default Skills;
