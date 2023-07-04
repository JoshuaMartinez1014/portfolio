import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/global.css";
import { Navbar, Nav, Container, Form, Button, Modal } from "react-bootstrap";
import linkedIn from "../img/linkedin.png";
import github from "../img/github-sign.png";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
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
    <header
      className="sticky-header"
      style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, .2)" }}
    >
      <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
        <Container fluid>
          <Navbar.Brand href="#home">
            Joshua Martinez <span style={{ color: "grey" }}>- Portfolio</span>
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link onClick={() => setShowModal(true)}>
                  Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Dialog
          style={{
            margin: "0",
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Contact Form... &#128221;</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={sendEmail}
              style={{
                backgroundColor: "lightgrey",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "30px",
              }}
            >
              <div style={{ width: "80%" }}>
                <span
                /* style={{ display: "flex", justifyContent: "space-between" }} */
                >
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
                  <br />
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
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </header>
  );
};

export default Header;
