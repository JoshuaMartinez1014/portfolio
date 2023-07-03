import React from "react";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import profileImg from "../img/MainProfile1.png";

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
        <img src={profileImg} className="profile-image" alt="Profile" />
        <h1 style={{ margin: "10px 0px 0px 415px" }}>Joshua Martinez</h1>
        <AboutMe />
        <Education />
      </main>
    </section>
  );
};

export default Homepage;
