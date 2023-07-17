import React, { useState, useEffect } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
/* fkdjsafkljsa;dlfkjsda;lfj;saldjfk */
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Projects from "../components/Projects";
import profileImg from "../img/MainProfile1.png";
import badge from "../img/badge.png";

const DisplayWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // cleanup function - remove the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []); // empty dependency array means this effect runs once on mount and cleanup on unmount

  return <p>The viewport width is {windowWidth} pixels.</p>;
};

const Homepage = () => {
  return (
    <section className="homepage">
      <header className="homepage-top-container">
        <DisplayWindowWidth />{" "}
        <div className="homepage-top-article">
          <div className="homepage-top-details d-flex justify-content-start">
            <p className="homepage-top-p">Web Developer</p>
            <p className="homepage-top-p">Graphic Designer</p>
            <p className="homepage-top-p">Problem Solver</p>
          </div>
          <h1 className="homepage-top-h1">
            Crafting Dynamic Web Solutions <br />
            with {""}
            <span className="homepage-top-tagline">Precision and Passion</span>
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
          alt="web development completement badge"
          className="webdev-badge "
        />
        <img
          src={profileImg}
          className="profile-image"
          alt="Profile image of Joshua Martinez"
        />
        <div className="homepage-title">
          <h1 className="homepage-title-name">Joshua Martinez</h1>
          <a href="#">
            <div>
              <h3 className="homepage-title-resume">Resume... &#128221;</h3>
            </div>
          </a>
        </div>
        <div className="main-container">
          <AboutMe />
          <Education />
          <Skills />
          <Projects />
        </div>
        <Contact />
      </main>
    </section>
  );
};

export default Homepage;
