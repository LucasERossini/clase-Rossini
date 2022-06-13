import React from 'react'
import { Row, Container } from "react-bootstrap";
import Item from './Item'

export default function ItemList({ productos }) {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                        {productos.map((producto) => <Item key={producto.id} producto={producto} />)}
                </Row>
            </Container>
        </>
    )
};