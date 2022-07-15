import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import PlaceholderItemDetail from '../PlaceholderItemDetail';

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

    return (
        <div style={{ backgroundColor: "#5c6286", paddingTop: 90, paddingBottom: 40 }}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        {loading ? <PlaceholderItemDetail/> : <ItemDetail producto={producto} />}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}