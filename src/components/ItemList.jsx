import { Container, Row } from "react-bootstrap";
import Item from './Item';

export default function ItemList({ productos }) {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    {productos.map((producto) => <Item key={producto.id} producto={producto} />)}
                </Row>
            </Container>
        </>
    )
};