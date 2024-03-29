import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Fungi Finds</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;