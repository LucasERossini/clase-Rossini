import React, { useState , useEffect } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [
                        { id: "01", category: "mother", title: "Mother 1", description: "Buen mother", detail: "Buena mother. Cumple con funciones básicas.", price: 150, pictureUrl: "", stock: 10, color: "negro"},
                        { id: "02", category: "mother", title: "Mother 2", description: "Gran mother", detail: "Gran mother. Cumple con funciones básicas y extras.", price: 250, pictureUrl: "", stock: 10, color: "gris oscuro"},
                        { id: "03", category: "procesador", title: "Procesador 1", description: "Buen procesador", detail: "Buen procesador. Cumple con funciones básicas.", price: 200, pictureUrl: "", stock: 10, color: "azul"},
                        { id: "04", category: "procesador", title: "Procesador 2", description: "Gran procesador", detail: "Gran procesador. Cumple con funciones básicas y extras.", price: 300, pictureUrl: "", stock: 10, color: "blanco"},
                        { id: "05", category: "fuente", title: "Fuente 1", description: "Buen fuente", detail: "Buena fuente. Cumple con funciones básicas.", price: 100, pictureUrl: "", stock: 10, color: "negro"},
                        { id: "06", category: "fuente", title: "Fuente 2", description: "Gran fuente", detail: "Gran fuente. Cumple con funciones básicas y extras.", price: 200, pictureUrl: "", stock: 10, color: "blanco"}
                    ]
                );
            }, 2000);
        });
        getProducts
            .then((result) => {
                setProductos(
                    result.filter(producto => producto.id === id)
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

    let producto = productos[0];

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