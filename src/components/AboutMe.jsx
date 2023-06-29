import React from "react";
import "../styles/global.css";

const AboutMe = () => {
  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <div style={{ width: "88vw" }}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/22/23/13/dog-1851107_1280.jpg"
          style={{
            width: "100%",
            borderRadius: "5px",
          }}
        />
        <br />
        <h1>Hello, Im Joshua Martinez</h1>
        <p style={{ color: "grey" }}>
          I'm a web developer and graphic designer
        </p>
        <p>
          I enjoy making websites using both my technical coding skill, as well
          as my design skills, to create something inspiring and apealing to
          clients
        </p>
        <br />
        <span style={{ display: "flex", justifyContent: "space-around" }}>
          <button className="aboutme-btns" role="button">
            Resume
          </button>
          <br />
          <button className="aboutme-btns" role="button">
            Work
          </button>
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
