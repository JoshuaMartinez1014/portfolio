import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/global.css";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setAlertMessage(
            "There was an error sending your message. Please try again."
          );
          setAlertVariant("danger");
          setShowAlert(true);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "100px",
          /*  justifyContent: "space-around", */
          backgroundColor: "lightgrey",
          height: "440px",
          fontWeight: "bold",
          /*    borderBottom: "solid grey 2px", */
          boxShadow: "0px -8px 6px rgba(0, 0, 0, .2)",
        }}
      >
        <form
          onSubmit={sendEmail}
          style={{
            width: "60%",
            backgroundColor: "lightgrey",
            display: "flex",
            justifyContent: "center",
            paddingTop: "30px",
            borderRight: "grey solid 4px",
          }}
        >
          <div style={{ width: "60%" }}>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="firstName"
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
                    boxShadow: "4px 4px 4px rgba(0, 0, 0, .2)",
                  }}
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
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
                    boxShadow: "4px 4px 4px rgba(0, 0, 0, .2)",
                  }}
                />
              </div>
            </span>
            <br />
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
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
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, .2)",
                }}
              />
            </div>
            <br />

            <button
              type="submit"
              style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, .2)" }}
            >
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
              boxShadow: "0px 4px 4px rgba(0, 0, 0, .2)",
            }}
          >
            <span>
              <h4>Email:</h4>
              <h5>Joshaumartinez1014@gmail.com</h5>
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
              boxShadow: "0px 4px 4px rgba(0, 0, 0, .2)",
            }}
          >
            {" "}
            <span>
              <h4>Phone:</h4>
              <h5>507-402-5554</h5>
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
              <h4>Home:</h4>
              <h5>Hutchinson, Minnesota</h5>
            </span>{" "}
            <span style={{ fontSize: "3rem" }}>&#127968;</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
