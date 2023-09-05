import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <Navbar expand="lg" bg="secondary" variant="secondary" className="px-3" >
      <Navbar.Brand href="#" className="d-block d-lg-none">GST</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto " >
          <Nav.Link href="#" className="px-3">Home</Nav.Link>
          <Nav.Link href="#" className="px-3">About</Nav.Link>
          <Nav.Link href="#" className="px-3">Services</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#" className="text-center px-3">Contact</NavDropdown.Item>
            <NavDropdown.Item href="#" className="text-center px-3">Portfolio</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#" className="d-none d-lg-block">GST</Navbar.Brand>
      
    </Navbar>
  );
};

export default NavbarComp;
