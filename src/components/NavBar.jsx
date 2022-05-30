import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Computadora from "./Computadora";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Computadora />
        <Navbar.Brand href="#home">Computación</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#producto1">Producto 1</NavDropdown.Item>
            <NavDropdown.Item href="#producto2">Producto 2</NavDropdown.Item>
            <NavDropdown.Item href="#producto3">Producto 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
