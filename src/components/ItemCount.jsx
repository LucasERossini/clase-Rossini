import { Col, Container, Row } from "react-bootstrap";

export default function ItemCount({ cant, setCant, inicial, max, onAdd}) {
    const sumar = () => {
        cant < max && setCant(cant + 1);
    };
    const restar = () => {
        cant > inicial && setCant(cant - 1);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <button className="btn btn-primary" onClick={restar} style={{backgroundColor: "#3c50c2", borderRadius: 10}}>-</button>
                </Col>
                <Col xs="auto">
                    <h2 className="justify-content-center">{cant}</h2>
                </Col>
                <Col xs="auto">
                    <button className="btn btn-primary" onClick={sumar} style={{backgroundColor: "#3c50c2", borderRadius: 10}}>+</button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <button className="btn btn-primary" onClick={() => onAdd()} style={{backgroundColor: "#3c50c2", borderRadius: 10, marginTop: 5}}>Agregar al Carrito</button>
                </Col>
            </Row>
        </Container>
    );
};