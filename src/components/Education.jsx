import React from "react";
import UOM from "../img/UOM.jpg";
import Rasmussen from "../img/Rasmussen.jpg";
import codeacademy from "../img/codeacademy.png";

const Education = () => {
  return (
    <section
      style={{
        marginTop: "30px",
        marginLeft: "135px",
        width: "80%",
      }}
    >
      <h2>Education</h2> <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img
            src={UOM}
            style={{
              height: "220px",
              width: "400px",
              borderRadius: "15px",
            }}
          />
          <br />
          <br />

          <h4>University of Minnesota Bootcamp</h4>
          <p>Full Stack Web Dev - Certficate</p>
        </div>
        <div>
          <img
            src={Rasmussen}
            style={{
              height: "220px",
              width: "400px",
              borderRadius: "15px",
            }}
          />{" "}
          <br /> <br />
          <h4>University of Rasmussen</h4>
          <p>Associates in Applied Science for Graphic Design</p>
        </div>
        <div>
          <img
            src={codeacademy}
            style={{
              height: "220px",
              width: "400px",
              borderRadius: "15px",
            }}
          />{" "}
          <br /> <br />
          <h4>Codecademy</h4>
          <p>React - Certificate</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
