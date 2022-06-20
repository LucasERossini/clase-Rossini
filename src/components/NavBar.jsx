import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container >
        <Link to="/">
          <img src="/images/computadora.png" style={{height: 50, marginRight: 10}} alt="Logo de Computación"/>
        </Link>
        <Navbar.Brand>
          <Link to="/" style={{textDecoration: "none", color: "white"}}>Computación</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown" >
            <NavDropdown.Item as={Link} to="/category/motherboard"> Motherboards </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/cpu"> Procesadores </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/fuente"> Fuentes </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
          <CartWidget cantidad={4}/>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
