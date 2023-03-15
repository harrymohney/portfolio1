import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';

function router() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React Bootstrap Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Contact() {
  return <h1>Contact Us</h1>;
}

export default router;
