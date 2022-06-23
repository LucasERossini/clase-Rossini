import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
    const { id, title, description, price , pictureUrl } = producto;
    return (
        <>
            <Card style={{ width: "15rem" , marginRight: 18, marginBottom: 20}}>
                <Card.Img variant="top" src={pictureUrl} alt={`Imagen de ${title}`} style={{height: 190}}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>${price}</Card.Title>
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
