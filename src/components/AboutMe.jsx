import React from "react";
import starIcon from "../img/starIcon.png";
import lightningIcon from "../img/lightningIcon.png";
import heartIcon from "../img/heartIcon.png";
import "../styles/global.css";

const AboutMe = () => {
  return (
    <section
      style={{
        width: "80%",
        fontSize: "1rem",
        marginLeft: "135px",
        marginTop: "85px",
      }}
    >
      <h2>About Me</h2> <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <article className="aboutme-par">
          <img className="icon-img" src={starIcon} /> <br />
          <br />
          <p>
            Proficient in React, adept at component-based architecture, state
            management, and creating dynamic web applications. Skilled in
            leveraging React libraries, such as Redux, to simplify state
            management, optimize performance, and enhance application
            functionality.
          </p>
        </article>
        <article className="aboutme-par">
          <img className="icon-img" src={heartIcon} />
          <br />
          <br />
          <p>
            Proficient in React, adept at component-based architecture, state
            management, and creating dynamic web applications. Skilled in
            leveraging React libraries, such as Redux, to simplify state
            management, optimize performance, and enhance application
            functionality.
          </p>
        </article>
        <article className="aboutme-par">
          <img className="icon-img" src={lightningIcon} /> <br />
          <br />
          <p>
            Proficient in React, adept at component-based architecture, state
            management, and creating dynamic web applications. Skilled in
            leveraging React libraries, such as Redux, to simplify state
            management, optimize performance, and enhance application
            functionality.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
