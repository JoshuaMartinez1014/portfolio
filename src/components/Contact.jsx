import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/global.css";
import { Container, Form, Button, Modal } from "react-bootstrap";
/* sdfsadfdsf */
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
      {" "}
      {/*  */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
          justifyContent: "space-evenly",
          backgroundColor: "lightgrey",
          height: "50px",
          /* borderTop: "darkgrey solid 4px", */
          boxShadow: "0px -3px 18px rgba(0, 0, 0, 0.4)",
          /* fontWeight: "bold", */
          /*    borderBottom: "solid grey 2px", */
        }}
      >
        <div
          style={{
            borderRight: "solid grey 2px",
            flex: "1",
            padding: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <span style={{ display: "flex" }}>
            <h5>Email:</h5>
            <p>Joshaumartinez1014@gmail.com</p>
          </span>
          <span style={{ fontSize: "1.25rem" }}>&#128231;</span>
        </div>
        <div
          style={{
            borderRight: "solid grey 2px",
            flex: "1",
            padding: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {" "}
          <span style={{ display: "flex" }}>
            <h5>Phone:</h5>
            <p>507-402-5554</p>
          </span>
          <span style={{ fontSize: "1.25rem" }}>&#128222;</span>
        </div>
        <div
          style={{
            flex: "1",
            padding: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <span style={{ display: "flex" }}>
            <h5>Home:</h5>
            <p>Hutchinson, Minnesota</p>
          </span>
          <span style={{ fontSize: "1.25rem" }}>&#127968;</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
