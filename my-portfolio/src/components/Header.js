import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ handlePageChange }) {
  return (
    <header id='header' className="bg-dark text-light">
      <h1>Aelin Rose 🌹</h1>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#AboutMe" onClick={() => handlePageChange('AboutMe')}>About Me</Nav.Link>
              <Nav.Link href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
              <Nav.Link href="#ContactMe" onClick={() => handlePageChange('ContactMe')}>Contact Me</Nav.Link>
              <Nav.Link href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
