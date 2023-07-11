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
          <p>Full Stack Web Dev - Certficate</p>
        </article>
        <article className="education-article">
          <div className="education-img-container">
            <img className="education-img" src={Rasmussen} />
          </div>{" "}
          <br />
          <h4>University of Rasmussen</h4>
          <p>Associates in AS for Graphic Design</p>
        </article>
        <article className="education-article">
          <div className="education-img-container">
            <img className="education-img" src={codeacademy} />
          </div>{" "}
          <br />
          <h4>Codecademy</h4>
          <p>React - Certificate</p>
        </article>
      </div>
    </section>
  );
};

export default Education;
