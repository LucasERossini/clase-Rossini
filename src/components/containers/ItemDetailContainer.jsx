import React, { useState , useEffect } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import ItemDetail from '../ItemDetail';

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ 
                    id: "01",
                    title: "Producto 1",
                    description: "Buen producto",
                    detail: "Buen producto. Cumple con las funciones básicas.",
                    price: 100, 
                    pictureUrl: "",
                    stock: 10,
                    color: "negro"},
                    );
            }, 2000);
        });
        getProducts
            .then((result) => {
                setProducto(result);
            })
            .catch((error) => {
                console.error("Error", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    console.log(producto);

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        {loading && "Loading..."}
                        {producto && <ItemDetail producto={producto}/>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}