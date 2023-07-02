import React from "react";
import profileImg from "../img/MainProfile1.png";
import starIcon from "../img/starIcon.png";

const Homepage = () => {
  return (
    <section className="homepage">
      <section
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
            <p className="homepage-details">Designer</p>
            <p className="homepage-details">Problem Solver</p>
          </div>
          <h1>
            Crafting Dynamic Web Solutions
            <br /> with{" "}
            <span className="homepage-title">Precision and Passion</span>
          </h1>

          <p className="homepage-details">
            &#128640; Proficient in Developing with React Framework
          </p>
        </div>
      </section>
      <main>
        <img src={profileImg} className="profile-image" alt="Profile" />
        <h1 style={{ margin: "10px 0px 0px 415px" }}>Joshua Martinez</h1>
        <div style={{ marginLeft: "135px", marginTop: "120px" }}></div>
      </main>
    </section>
  );
};

export default Homepage;
