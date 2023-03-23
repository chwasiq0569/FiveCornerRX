// import { BrowserRouter as Link } from 'react-router-dom';
import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone-icon.svg";
import user from "../../assets/user-icon.svg";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid className="navbar-container">
        <Navbar.Brand href="#" >
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="me-auto my-2 my-lg-0 nav-con"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav-links">How It Works</Nav.Link>
            <Nav.Link href="#action2" className="nav-links">FAQs</Nav.Link>
          </Nav>
          <Nav className="d-flex right-menu">
            <Nav.Link href="#action1" className="nav-links"><img src={phone} alt="" />1-800-240-7624</Nav.Link>
            <Button variant="light" className="loginBtn"><img src={user} alt="" />Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
