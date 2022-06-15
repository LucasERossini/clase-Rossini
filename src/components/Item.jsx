import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
    const { id, category, title, description, price } = producto;
    return (
        <>
            <Card style={{ width: "15rem" , marginRight: 18, marginBottom: 20}}>
                <Card.Img variant="top" src={`/images/${category}.png `} alt={`Imagen de ${title}`} style={{height: 190}}/>
                <Card.Body>
                    <Card.Title>{title}: ${price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/item/${id}`}>
                        <Button variant="primary">
                            Ver Detalle 
                        </Button>
                    </Link>
                    
                </Card.Body>
            </Card>
        </>
    );
}
