import React from "react";
import "../styles/global.css";

const Footer = () => {
  return (
    <section
      style={{
        height: "50px",
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "10px",
        paddingTop: "5px",
        color: "white",
      }}
    >
      <p
        style={{
          fontSize: ".9rem",
        }}
      >
        Created by Joshua Martinez
      </p>
    </section>
  );
};

export default Footer;
