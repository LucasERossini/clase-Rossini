import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const [navLinks, setNavLinks] = useState([]);

  const { getItemQty } = useContext(CartContext);

  useEffect(() => {
    const coleccion = 'items';
    const db = getFirestore();
    const coleccionProductos = collection(db, coleccion);

    getDocs(coleccionProductos)
      .then(res => res.docs.map(doc => doc.data().category))
      .then(uniqueArray => setNavLinks([...new Set(uniqueArray)]))
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <>
      <Navbar collapseOnSelect variant="dark" expand="md" fixed="top"  style={{ backgroundColor: "#282a3a"}}>
        <Container>
          <Link to="/" style={{ textDecoration: "none", color: "white" , marginTop: 6}}>
            <img src="/images/computadora.png" style={{ height: 50, marginRight: 10 }} alt="Logo de Computación" />
            <Navbar.Brand style={{ marginLeft: 5}}>
              <h5 style={{display: "inline", color: "#eaedff"}}>Computación</h5>
            </Navbar.Brand>
          </Link>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav>
              {navLinks.map((element, index) => {
                return <Nav.Link href="#action1" as={Link} to={`/category/${element}`} key={index}>{element}</Nav.Link>
              })}
            </Nav>
          </Navbar.Collapse>
          {getItemQty() > 0 && <CartWidget />}
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        </Container>
      </Navbar>
    </>
  );
};