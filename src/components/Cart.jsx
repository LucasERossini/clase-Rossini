import { useContext } from 'react';
import { Card, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Cart() {

    const { cart, deleteItem, getItemPrice } = useContext(CartContext);

    console.log(cart);

    let styles = { padding: 10, textAlign: "center", fontSize: "25px" };

    if (cart.length === 0) return (
        <div style={styles}>
            <h1> No hay ningún producto en el carrito. </h1>
            <Link to="/">
                <button className="btn btn-primary">
                    Volver a la tienda
                </button>
            </Link>
        </div>
    );

    return (
        <>
            <div style={{ margin: 40 }}>
                <Table striped bordered hover >
                    <thead>
                        <tr style={styles}>
                            <th>Cantidad</th>
                            <th>Producto</th>
                            <th>Precio Unitario</th>
                            <th>Precio Total</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody style={styles}>
                        {cart && cart.map(item => (
                            <tr key={item.id}>
                                <td style={styles}>{item.qty}</td>
                                <td style={styles}>{item.title}</td>
                                <td style={styles}>${item.price}</td>
                                <td style={styles}>${item.price * item.qty}</td>
                                <td style={styles}>
                                    <button className="btn btn-danger" onClick={() => {
                                        deleteItem(item.id);
                                    }}>Eliminar Producto</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Container>
                    <Row style={{ paddingTop: 30 }} className="justify-content-md-center">
                        <Card style={{ width: "26rem", textAlign: "center" }}>
                            <Card.Title style={{ fontSize: "30px" }}>
                                Importe total a pagar: ${getItemPrice()}
                            </Card.Title>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    )
};