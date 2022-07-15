import { useContext, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

export default function ItemDetail({ producto }) {
    const [cant, setCant] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const { id, title, detail, price, color, stock, pictureUrl } = producto;

    const { cart, noStock, addItem, deleteItem } = useContext(CartContext);

    const onAdd = () => {
        if (cant > 0) {
            addItem(producto, cant);
            if (noStock.current === true) {
                return;
            } else {
                setIsAdded(true);
            };
        };
    };
    
    const productoInCart = cart.find(item => item.id === id);

    const isProductInCart = () => {
        if (productoInCart) {
            if (productoInCart.qty > 0) {
                return true;
            };            
        } else {
            return false;
        };
    };

    const whenAdded = () => {
        let message = '';
        if (isAdded === true) {
            message = `Agregaste ${cant} producto/s al carrito.`;
        } else {
            message = `Ya tenés ${productoInCart.qty} unidad/es de este producto en el carrito.`;
        };
        return (
            <div style={{ textAlign: "center", paddingTop: 20 }}>
                <p style={{ fontSize: 15, color: "#00d300" }}>{message}</p>
                <Link to="/cart">
                    <button className="btn btn-success" style={{ backgroundColor: "#005f00", borderRadius: 10 }}>
                        Ir al Carrito
                    </button>
                </Link>
                <button className="btn btn-danger" onClick={() => { deleteItem(id); setIsAdded(false); return }} style={{ backgroundColor: "#9b0000", borderRadius: 10, marginTop: 5 }}>
                    Eliminar producto del Carrito
                </button>
            </div>
        );
    };

    return (
        <>
            <Container>
                <Row className="justify-content-center" style={{ paddingTop: 40, paddingBottom: 40 }}>
                    <Card style={{ width: "20rem", backgroundColor: "#313447", paddingTop: 70, paddingBottom: 50, paddingLeft: 20, paddingRight: 20 }}>
                        <Card.Img variant="top" src={pictureUrl} alt={`Imagen de ${title}`} style={{ height: 255 }} />
                    </Card>
                    <Card style={{ width: '20rem', backgroundColor: "#313447", color: "white", padding: 20 }}>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", fontSize: 30 }}>{title}</Card.Title>
                            <Card.Text style={{ paddingTop: 20 }}>
                                {detail}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item style={{ backgroundColor: "#313447", color: "white", borderTop: "1px solid #3c50c2" }}>Color: {color}</ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: "#313447", color: "white", borderTop: "1px solid #3c50c2" }}>Cantidad disponible: {stock}</ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: "#313447", color: "white", borderTop: "1px solid #3c50c2", borderBottom: "1px solid #3c50c2" }}>Precio: ${price}.-</ListGroup.Item>
                            <Row className="justify-content-center" style={{ paddingTop: 10 }}>
                                <Col xs="auto">
                                    {isAdded === false ?
                                        <div>
                                            <ItemCount cant={cant} setCant={setCant} inicial={1} max={stock} onAdd={onAdd} />
                                            {isProductInCart() && whenAdded()}
                                        </div> :
                                        <>{whenAdded()}</>
                                    }
                                </Col>
                            </Row>
                        </ListGroup>
                    </Card>
                </Row>
            </Container>
        </>
    )
};