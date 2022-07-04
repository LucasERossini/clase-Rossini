import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

export default function CartWidget() {

const {getItemQty} = useContext(CartContext);

  return (
      <>
        <Link to="/cart" style={{textDecoration: "none"}}>
              <img src="/images/cart.png" style={{height: 30, marginLeft: 10, marginTop: 0}} alt="Imagen de Carrito"/>
              <Badge bg="secondary" style={{marginLeft: 5, marginTop: 10}}>{getItemQty()}</Badge>
        </Link>
      </>
  )
};