import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-light py-3">
    <Container>
      <Row>
        <Col sm={6}>
          <p className="text-muted">
            &copy; {new Date().getFullYear()} Fungi Finds
          </p>
        </Col>
        <Col sm={6}>
          <ul className="list-inline d-flex justify-content-end mb-0">
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Contact</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;