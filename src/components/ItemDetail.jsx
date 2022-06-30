import { useContext } from 'react';
import { useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

export default function ItemDetail({ producto }) {
    const [cant, setCant] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const { id, title, detail, price, color, stock, pictureUrl } = producto;

    const { isInCart, addItem, deleteItem} = useContext(CartContext);

    const onAdd = () => {
        if (cant > 0) {
            isInCart(id);
            addItem(producto, cant);
            console.log(cant);
            setIsAdded(true);
        };
    };

    return (
        <>
            <Container>
                <Row style={{ paddingTop: 30 }}>
                    <Card style={{ width: "22rem" }}>
                        <Card.Img variant="top" src={pictureUrl} alt={`Imagen de ${title}`} style={{ height: 280 }} />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {detail}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Precio: ${price}</ListGroup.Item>
                            <ListGroup.Item>Color: {color}</ListGroup.Item>
                            <ListGroup.Item>Cantidad disponible: {stock}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <Col md="auto">                        
                        {isAdded === false ? <ItemCount cant={cant} setCant={setCant} inicial={1} max={stock} onAdd={onAdd} /> :
                            <div style={{textAlign: "center"}}>
                                <h4>Agregaste {cant} producto/s al carrito. </h4>
                                <Link to="/cart" style={{paddingRight: 10}}>
                                    <button className="btn btn-success">
                                        Ir al Carrito
                                    </button>
                                </Link>
                                <button className="btn btn-danger" onClick={() => {deleteItem(id); setIsAdded(false)}}>
                                    Eliminar producto del Carrito
                                </button>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
};