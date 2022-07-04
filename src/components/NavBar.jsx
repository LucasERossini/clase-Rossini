import { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const [navLinks, setNavLinks] = useState([]);

  const { getItemQty } = useContext(CartContext);

  useEffect(() => {
    fetch("/productos.json")
      .then(res => res.json())
      .then(parseArray => parseArray.map(x => x.category))
      .then(uniqueArray => setNavLinks([...new Set(uniqueArray)]))

  }, []);
  
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
          <NavDropdown title="Categorías" id="basic-nav-dropdown" >
            {navLinks.map((element, index) => {
              return <NavDropdown.Item as={Link} to={`/category/${element}`} key={index}>{element}</NavDropdown.Item> 
            })}
          </NavDropdown>
          {getItemQty() > 0 && <CartWidget/>}
        </Nav>
      </Container>
    </Navbar>
  );
};