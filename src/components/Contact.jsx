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
          borderTop: "darkgrey solid 4px",

          fontWeight: "bold",
          /*    borderBottom: "solid grey 2px", */
        }}
      >
        <div
          style={{
            height: "33.3%",
            borderRight: "solid grey 2px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flex: "1",
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
            borderRight: "solid grey 2px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flex: "1",
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
            flex: "1",
            padding: "10px",
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
    </>
  );
};

export default Contact;
