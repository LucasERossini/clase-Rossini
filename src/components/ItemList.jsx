import React from 'react'
import { Row, Container } from "react-bootstrap";
import Item from './Item'

export default function ItemList({ productos }) {
    return (
        <>
            <Container>
                <Row>
                    {productos.map((producto) => <Item key={producto.id} producto={producto} />)}
                </Row>
            </Container>
        </>
    )
};