import React, { useState , useEffect } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {
    const [productos, setProductos] = useState(false);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    fetch("/productos.json")
                        .then(response => response.json())
                );
            }, 2000);
        });
        getProducts
            .then((result) => {
                setProductos(
                    result.find(producto => producto.id === id)
                );
            })
            .catch((error) => {
                console.error("Error", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    console.log(productos);

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        {loading && "Loading..."}
                        {productos && <ItemDetail productos={productos}/>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}