import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/global.css";
import { Navbar, Nav, Container, Form, Button, Modal } from "react-bootstrap";
import Resume from "../img/Joshua_Martinez.pdf";

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
    <header className="sticky-header">
      <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
        <Container fluid>
          <Navbar.Brand href="#home">
            Joshua Martinez{" "}
            <span className="header-portfolio" style={{ color: "grey" }}>
              - Portfolio
            </span>
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link
                  href="https://docs.google.com/document/d/1AXCdMTVJeOraIX1PcCtoYY8brL6WMxH_63uUJ3jRxIs/edit"
                  target="_blank"
                >
                  Resume
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/JoshuaMartinez1014"
                  target="_blank"
                >
                  Github
                </Nav.Link>
                <Nav.Link
                  href="www.linkedin.com/in/joshua-martinez1014"
                  target="_blank"
                >
                  LinkedIn
                </Nav.Link>
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
            <form onSubmit={sendEmail}>
              <div style={{ width: "80%" }}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="firstName"
                    placeholder="Enter your name"
                    required
                    className="form-input"
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
                    className="form-input"
                  />
                </div>

                <br />
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows="3"
                    required
                    className="form-input-message"
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
