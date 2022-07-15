import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
    const { id, title, description, price, pictureUrl } = producto;
    return (
        <>
            <Card  style={{ width: "18rem", marginRight: 9, marginLeft: 9, marginBottom: 20 , borderRadius: 20, backgroundColor: "#313447"}}>
                <Card.Img variant="top" src={pictureUrl} alt={`Imagen de ${title}`} style={{ height: 240, marginTop: 10, marginBottom: 10 }} />
                <Card.Body style={{ color: "white", borderTop: "1px solid #3c50c2" }}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title>Precio: ${price}.-</Card.Title>
                    <Link to={`/item/${id}`} style={{ textDecorationLine: "none"}}>
                        <Row className="justify-content-center" >
                            <Button style={{ backgroundColor: "#3c50c2" }}>
                                Ver Detalle
                            </Button>
                        </Row>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};