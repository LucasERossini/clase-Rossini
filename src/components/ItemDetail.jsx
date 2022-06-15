import React from 'react'
import {Container, Row, Card, ListGroup, Col} from 'react-bootstrap';
import ItemCount from './ItemCount';

export default function ItemDetail({productos}) {
    const onAdd = (count) => {
        alert(`Agregaste ${count} producto/s al carrito`);
    };

    const { category, title, detail, price , color , stock} = productos;
    return (
        <> 
            <Container>
                <Row>
                    <Card style={{ width: "22rem" }}>
                        <Card.Img variant="top" src={`/images/${category}.png `} alt={`Imagen de ${title}`} style={{height: 280}}/>
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
                        <ItemCount inicial={1} max={10} onAdd={onAdd} />
                    </Col>
                </Row>
            </Container>

            
        </>
    )
}