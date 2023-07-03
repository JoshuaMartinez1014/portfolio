import React from "react";
import "../styles/global.css";
import { Container, Form, Button } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <div
        className="homepage-container"
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "60px",
          /*  justifyContent: "space-around", */
          backgroundColor: "lightgrey",
          height: "500px",
          fontWeight: "bold",
        }}
      >
        <form
          style={{
            width: "60%",
            backgroundColor: "lightgrey",
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
            borderRight: "grey solid 4px",
          }}
        >
          <div style={{ width: "60%" }}>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  style={{
                    width: "100%",
                    height: "45px",
                    padding: "6px 12px",
                    fontSize: "1rem",

                    color: "#555",
                    backgroundColor: "#fff",
                    backgroundImage: "none",
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  style={{
                    width: "100%",
                    height: "45px",
                    padding: "6px 12px",
                    fontSize: "1rem",

                    color: "#555",
                    backgroundColor: "#fff",
                    backgroundImage: "none",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            </span>
            <br />
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your message"
                rows="3"
                required
                style={{
                  width: "100%",
                  height: "200px",
                  padding: "6px 12px",
                  fontSize: "1rem",
                  lineHeight: "1.42857143",
                  color: "#555",
                  backgroundColor: "#fff",
                  backgroundImage: "none",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <br />

            <button type="submit" style={{}}>
              Submit
            </button>
          </div>
        </form>

        <div style={{ width: "40%" }}>
          <div
            style={{
              height: "33.3%",
              borderBottom: "solid 2px grey",
              padding: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <h2>Email:</h2>
              <h4>Joshaumartinez1014@gmail.com</h4>
            </span>
            <span style={{ fontSize: "3rem" }}>&#128231;</span>
          </div>
          <div
            style={{
              height: "33.3%",
              borderBottom: "solid 2px grey",
              padding: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <span>
              <h2>Phone:</h2>
              <h4>507-402-5554</h4>
            </span>
            <span style={{ fontSize: "3rem" }}>&#128222;</span>
          </div>
          <div
            style={{
              height: "33.3%",

              padding: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <span>
              <h2>Home:</h2>
              <h4>Hutchinson, Minnesota</h4>
            </span>{" "}
            <span style={{ fontSize: "3rem" }}>&#127968;</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
