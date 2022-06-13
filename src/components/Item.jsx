import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
    const { id, title, description, price } = producto;
    return (
        <>
            <Card style={{ width: "15rem" , marginRight: 20, marginBottom: 20}}>
                <Card.Img variant="top" src= "/images/computadora.png" alt={`Imagen de ${title}`}/>
                <Card.Body>
                    <Card.Title>{title}: ${price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">
                        <Link to={`/item/${id}`} style={{textDecoration: "none", color: "white"}}> Ver Detalle </Link>
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}
