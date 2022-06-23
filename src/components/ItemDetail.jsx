import { useContext } from 'react';
import { useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

export default function ItemDetail({productos}) {
    const [cant, setCant] = useState(0);

    const { id, title, detail, price , color , stock, pictureUrl } = productos;

    const {isInCart, addItem} = useContext(CartContext);

    const onAdd = () => {
        if (cant > 0) {
            isInCart(id);
            addItem(productos, cant);
            console.log(cant);
        };
    };

    return (
        <> 
            <Container>
                <Row>
                    <Card style={{ width: "22rem" }}>
                        <Card.Img variant="top" src={pictureUrl} alt={`Imagen de ${title}`} style={{height: 280}}/>
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
                        {<ItemCount cant={cant} setCant={setCant} inicial={0} max={stock} onAdd={onAdd}/>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}