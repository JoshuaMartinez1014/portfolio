import React from "react";
import UOM from "../img/UOM.jpg";
import Rasmussen from "../img/Rasmussen.jpg";
import codeacademy from "../img/codeacademy.png";
import "../styles/global.css";

const Education = () => {
  return (
    <section className="education-section">
      <h2>Education</h2> <br />
      <div className="education-container">
        <article className="education-article">
          <div className="education-img-container">
            <img className="education-img" src={UOM} />
          </div>
          <br />
          <h4>University of Minnesota Bootcamp</h4>
          <p>Full Stack Web Dev - Certficate 2023</p>
        </article>
        <article className="education-article">
          <div className="education-img-container">
            <img className="education-img" src={Rasmussen} />
          </div>{" "}
          <br />
          <h4>University of Rasmussen</h4>
          <p>Bachelors in Computer Science 2025</p>
        </article>
        <article className="education-article">
          <div className="education-img-container">
            <img className="education-img" src={Rasmussen} />
          </div>{" "}
          <br />
          <h4>University of Rasmussen</h4>
          <p>Associates in AS for Graphic Design 2023</p>
        </article>
      </div>
    </section>
  );
};

export default Education;
