import { useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import ItemCount from './ItemCount';

export default function ItemDetail({productos}) {
    const [cant, setCant] = useState(0);
    console.log(cant)

    const onAdd = (count) => {
        setCant(count);
        console.log(count);
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
                        {cant ? <>Finalizar Compra</> : <ItemCount inicial={1} max={stock} onAdd={onAdd}/>}
                    </Col>
                </Row>
            </Container>

            
        </>
    )
}