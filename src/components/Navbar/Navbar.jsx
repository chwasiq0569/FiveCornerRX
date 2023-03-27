// import { BrowserRouter as Link } from 'react-router-dom';
import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phoneN.svg";
import user from "../../assets/userN.svg";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar">
      <Container fluid className="navbar-container">
        <Navbar.Brand href="#" >
          <img src={logo} alt="" className="logimg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
        <Navbar.Collapse id="navbarScroll" className="navbarScroll">
          <Nav 
            className="me-auto my-2 my-lg-0 nav-con"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav-links">How It Works</Nav.Link>
            <Nav.Link href="#action2" className="nav-links">FAQs</Nav.Link>
          </Nav>
          <Nav className="d-flex right-menu">
            <Nav.Link href="#action1" className="nav-links navPhone"><img src={phone} alt="" />1-800-240-7624</Nav.Link>
            <Button variant="light" className="loginBtn"><img src={user} alt="" />Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
