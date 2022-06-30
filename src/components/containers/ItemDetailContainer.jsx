import { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState(false);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const coleccion = 'items';
        const db = getFirestore();
        const coleccionProductos = collection(db, coleccion);

        getDocs(coleccionProductos)
            .then((res) => {
                setProducto(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })).find(producto => producto.id === id));
            })
            .catch((error) => {
                console.error("Error", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    console.log(producto);

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        {loading && "Loading..."}
                        {producto && <ItemDetail producto={producto} />}
                    </Col>
                </Row>
            </Container>
        </>
    )
}