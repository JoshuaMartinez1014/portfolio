import React from "react";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Projects from "../components/Projects";
import profileImg from "../img/MainProfile1.png";
import badge from "../img/badge.png";

const Homepage = () => {
  return (
    <section className="homepage">
      <header
        className="homepage-top-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "50px",
          borderBottom: "grey solid 8px",
        }}
      >
        {" "}
        <div>
          <div className="d-flex justify-content-between" style={{ width: "" }}>
            <p className="homepage-details">Web Developer</p>
            <p className="homepage-details">Graphic Designer</p>
            <p className="homepage-details">Problem Solver</p>
          </div>
          <h1>
            Crafting Dynamic Web Solutions
            <br /> with{" "}
            <span className="homepage-title">Precision and Passion</span>
          </h1>

          <p className="homepage-details">
            &#128640; Proficient in Developing with React Framework...
          </p>
        </div>
      </header>

      {/*  */}
      <main>
        <img
          src={badge}
          alt="Badge"
          style={{
            position: "absolute",
            top: "250px",
            right: "75px",
            zIndex: 998,
            height: "300px",
          }}
        />
        <img src={profileImg} className="profile-image" alt="Profile" />
        <h1
          style={{
            margin: "10px 0px 0px 415px",
            borderBottom: "solid red 4px",
            width: "500px",
          }}
        >
          Joshua Martinez
        </h1>
        <h3
          style={{
            margin: "10px 0px 0px 415px",
            width: "25%",
          }}
        >
          Looking for Work... &#128221;
        </h3>
        <AboutMe />
        <Education />
        {/*    <Projects /> */}
        {/*   <Skills /> */}
        <Contact />
      </main>
    </section>
  );
};

export default Homepage;
