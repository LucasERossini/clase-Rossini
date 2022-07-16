import { useContext } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Cart() {
    const { cart, deleteItem, getItemPrice, getItemQty, emptyCart } = useContext(CartContext);

    let styles = { paddingTop: 10, textAlign: "center", fontSize: "16px", color: "white", verticalAlign: "middle" };

    if (cart.length === 0) return (
        <div style={{ backgroundColor: "#5c6286", paddingTop: 300, paddingBottom: 190 }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <h2 style={{ textAlign: "center", marginBottom: 35, color: "#eaedff" }}> No hay ningún producto en el carrito. </h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Link to="/">
                            <button className="btn btn-primary" style={{ backgroundColor: "#3c50c2", borderRadius: 10 }}>
                                Volver a la tienda
                            </button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );

    return (
        <>
            <div style={{ backgroundColor: "#5c6286", paddingTop: 110, paddingBottom: 170 }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col xxl="auto">
                            <h2 style={{ textAlign: "center", marginBottom: 35, color: "#eaedff" }}>Tu Carrito</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={9}>
                            <Table hover responsive borderless style={{ backgroundColor: "#313447", borderTopRightRadius: 20, borderTopLeftRadius: 20, marginBottom: 5 }}>
                                <thead>
                                    <tr style={styles}>
                                        <th>Producto</th>
                                        <th>Precio Unitario</th>
                                        <th>Precio Total</th>
                                        <th style={{ paddingRight: 10 }}>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody style={styles}>
                                    {cart && cart.map(item => (
                                        <tr key={item.id}>
                                            <td style={styles}>
                                                <Link to={`/item/${item.id}`} style={{ textDecoration: "none", color: "white" }}>
                                                    <img src={item.pictureUrl} alt={`Imagen de ${item.title}`} style={{ height: 30 }} /> {item.qty} x {item.title}
                                                </Link>
                                            </td>
                                            <td style={styles}>${item.price}.-</td>
                                            <td style={styles}>${item.price * item.qty}.-</td>
                                            <td style={styles}>
                                                <button className="btn btn-danger" onClick={() => {
                                                    deleteItem(item.id);
                                                }} style={{ backgroundColor: "#9b0000", borderRadius: 10 }}>X</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Row style={{ backgroundColor: "#313447", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, margin: 0, paddingTop: 20, paddingBottom: 20 }} className="justify-content-center">
                                <Col xs="auto" style={{ backgroundColor: "#5c6286", borderRadius: 20, padding: 10 }}>
                                    <Row className="justify-content-center">
                                        <Col xs="auto" style={{ fontSize: "20px", color: "white"}}>
                                            {getItemQty()} producto/s
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col xs="auto" style={{ fontSize: "23px", color: "white", marginBottom: 10 }}>
                                            Importe total a pagar: ${getItemPrice()}.-
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col xs="auto">
                                            <Link to="/checkout">
                                                <button className="btn btn-success" style={{ backgroundColor: "#005f00", marginRight: 5 }}>
                                                    Terminar Compra
                                                </button>
                                            </Link>
                                            <button className="btn btn-danger" onClick={() => emptyCart()} style={{ backgroundColor: "#9b0000", marginLeft: 5 }}>
                                                Vaciar Carrito
                                            </button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}