import React from 'react';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import logo from './flag.jpg';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="md" style={{ backgroundColor: '#0033A0' }} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="30" width="30" className="d-inline-block align-top logo" alt="Website Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
            <Nav.Link as={Link} to="/photo">Photo</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
          </Nav>
          <Form className="d-flex ms-auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              style={{ borderRadius: '20px' }}
            />
            <Button variant="outline-light" style={{ borderRadius: '20px' }}>
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
