import React from "react";
import "../styles/global.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedIn from "../img/linkedin.png";
import github from "../img/github-sign.png";

const Header = () => {
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
                <Nav.Link href="#link">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
