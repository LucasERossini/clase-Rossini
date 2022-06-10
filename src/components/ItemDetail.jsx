import React from 'react'
import {  Container, Row, Card , ListGroup } from "react-bootstrap";

export default function ItemDetail({producto}) {
    const { title, detail, price , color , stock} = producto;
    return (
        <> 
            <Container>
                <Row>
                    <Card style={{ width: "22rem" }}>
                        <Card.Img variant="top" src="images/computadora.png" alt={`Imagen de ${title}`} />
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
            </Container>

            
        </>
    )
}