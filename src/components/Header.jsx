import React from "react";
import "../styles/global.css";
import linkedIn from "../img/linkedin.png";
import github from "../img/github-sign.png";

const Header = () => {
  return (
    <header className="section-container">
      <div className="header-section">
        <h3>
          Joshua Martinez &nbsp;&nbsp;
          <span style={{ color: "grey" }}>- Portfolio</span>
        </h3>
        <div className="header-icon-container">
          <a
            href="https://www.linkedin.com/in/
joshua-martinez1014
"
            target="_blank"
          >
            <img
              className="header-icon"
              src={linkedIn}
              style={{
                height: "25px",
                marginRight: "20px",
                filter: "grayscale(75%)",
              }}
            />
          </a>
          <a href="https://github.com/JoshuaMartinez1014" target="_blank">
            <img
              className="header-icon"
              src={github}
              style={{
                height: "27px",
                marginRight: "20px",
              }}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
