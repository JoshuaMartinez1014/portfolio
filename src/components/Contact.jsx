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
      <section className="contact-section">
        <article className="contact-article" style={{}}>
          <p style={{ margin: "0", fontWeight: "bold" }}>Email:</p>
          <p style={{ margin: "0", wordBreak: "break-all" }}>
            Joshaumartinez1014@gmail.com
          </p>
          <span className="contact-icon" style={{ fontSize: "1.25rem" }}>
            &#128231;
          </span>
        </article>
        <article
          className="contact-article"
          style={{
            borderRight: "solid grey 2px",
            borderLeft: "solid grey 2px",
          }}
        >
          <p style={{ margin: "0", fontWeight: "bold" }}>Phone:</p>
          <p style={{ margin: "0" }}>507-402-5554</p>
          <span className="contact-icon" style={{ fontSize: "1.25rem" }}>
            &#128222;
          </span>
        </article>
        <article className="contact-article">
          <p style={{ margin: "0", fontWeight: "bold" }}>Home:</p>
          <p style={{ margin: "0" }}>Hutchinson, Minnesota</p>
          <span className="contact-icon" style={{ fontSize: "1.25rem" }}>
            &#127968;
          </span>
        </article>
      </section>
    </>
  );
};

export default Contact;
