import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
     <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#home">  <Link to={'/'} style={{ textDecoration: 'none', fontWeight: 'bold', color:'red',fontSize:'30px' }}>MegaList</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
           
          
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
           
          
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="">Login</Nav.Link>
            <Nav.Link href="">Register</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header