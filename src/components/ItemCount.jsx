import { Col, Container, Row } from "react-bootstrap";

export default function ItemCount({ cant, setCant, inicial, max, onAdd}) {
    const sumar = () => {
        cant < max ? setCant(cant + 1) : alert('No podés agregar más productos, porque la cantidad es mayor al stock disponible');
    };
    const restar = () => {
        cant > inicial ? setCant(cant - 1) : alert('No podés sacar más productos');
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h4>Elegí la cantidad</h4>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <button className="btn btn-primary" onClick={restar}>-</button>
                </Col>
                <Col md="auto">
                    <h2 className="justify-content-md-center">{cant}</h2>
                </Col>
                <Col md="auto">
                    <button className="btn btn-primary" onClick={sumar}>+</button>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <button className="btn btn-success" onClick={() => onAdd()}>Agregar al Carrito</button>
                </Col>
            </Row>
        </Container>
    );
};