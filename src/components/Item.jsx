import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Item({ producto }) {
    const { title, description, price } = producto;
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src= "images/computadora.png" alt={`Imagen de ${title}`}/>
                <Card.Body>
                    <Card.Title>{title}: ${price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Ver Detalle</Button>
                </Card.Body>
            </Card>
        </>
    );
}
