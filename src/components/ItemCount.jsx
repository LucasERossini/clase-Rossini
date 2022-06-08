import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

function ItemCount({ inicial, max, onAdd }) {
    const [count, setCount] = useState(inicial);
    const sumar = () => {
        count < max ? setCount(count + 1) : alert('No podés agregar más productos, porque la cantidad es mayot al stock disponible');
    };
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('No podés sacar más productos');
    };
    const reset = () => {
        setCount(inicial);
    };
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <button onClick={restar}>-</button>
                </Col>
                <Col md="auto">
                    <h2 className="justify-content-md-center">{count}</h2>
                </Col>
                <Col md="auto">
                    <button onClick={sumar}>+</button>
                </Col>
                <Col md="auto">
                    <button onClick={reset}>Reset</button>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <button onClick={() => {onAdd(count); reset()}}>Agregar al Carrito</button>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemCount;
