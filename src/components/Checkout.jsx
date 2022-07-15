import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { CartContext } from '../context/CartContext';
import { Container, Spinner, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function Checkout() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [idPurchase, setIdPurchase] = useState("");
    const [loading, setLoading] = useState();

    const db = getFirestore();
    const coleccionProductos = collection(db, "orders");

    const { cart, getItemQty, getItemPrice, emptyCart } = useContext(CartContext);

    const MySwal = (message) => {
        Swal.fire({
            color: 'white',
            background: '#313447',
            title: 'Error',
            text: message,
            icon: 'error',
            iconColor: '#9b0000',
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: 'Volver',
            cancelButtonColor: '#9b0000'
        });
    };

    function handleClick() {
        setLoading(true);
        const order = {
            buyer: { name, email, phone },
            items: cart,
            totalQty: getItemQty(),
            totalPrice: getItemPrice()
        };
        if (!name || !email || !phone) {
            MySwal("Completá todos los campos");
            setLoading(false);
            return;
        } else {
            if (validator.isEmail(email)) {
                addDoc(coleccionProductos, order)
                    .then(({ id }) => {
                        setIdPurchase(id);
                    })
                    .catch(err => {
                        console.error(err);
                    })
                    .finally(() => {
                        emptyCart();
                        setLoading(false);
                    });
            } else {
                MySwal("Formato de E-mail inválido");
                setLoading(false);
            };
        };
    };

    let styles = { backgroundColor: "#5c6286", paddingTop: 230, paddingBottom: 190 };

    let styles2 = { textAlign: "center", fontSize: "16px", color: "white", verticalAlign: "middle" };

    if (cart.length === 0) {
        return (
            <div style={styles}>
                {idPurchase ?
                    <Container>
                        <Row className="justify-content-center">
                            <Col xxl="auto">
                                <h2 style={{ textAlign: "center", marginBottom: 20, color: "#eaedff" }}>Compra confirmada</h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" style={{ backgroundColor: "#313447", borderRadius: 20, margin: 0, paddingTop: 20, paddingBottom: 20 }}>
                            <Col xs="auto" lg={7} style={{ color: "white", marginBottom: 0, backgroundColor: "#5c6286", borderRadius: 20, padding: 10 }}>
                                <Row className="justify-content-center">
                                    <Col xs="auto">
                                        <p style={{ textAlign: "center", fontSize: 23, color: "#87d17d" }}>El código de tu compra es: </p>
                                        <p style={{ textAlign: "center", fontSize: 23, color: "#87d17d" }}>{idPurchase}</p>
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <Link to="/">
                                                    <button className="btn btn-primary" style={{ backgroundColor: "#3c50c2" }}>
                                                        Regresar al Inicio
                                                    </button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container> :
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
                }
            </div>
        );
    } else {
        return (
            <div style={{ backgroundColor: "#5c6286", paddingTop: 100, paddingBottom: 170 }}>
                {loading ?
                    <Row className="justify-content-center" style={{ paddingTop: 190, paddingBottom: 160 }}>
                        <Spinner animation="grow" />
                        <Spinner animation="grow" />
                        <Spinner animation="grow" />
                    </Row> :
                    <Container>
                        <Row className="justify-content-center">
                            <Col xxl="auto">
                                <h2 style={{ textAlign: "center", marginBottom: 20, color: "#eaedff" }}>Tu Compra</h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg={5} style={{ backgroundColor: "#313447", border: "1px solid #3c50c2", paddingTop: 10, paddingBottom: 10 }}>
                                <Row className="justify-content-center">
                                    <Col>
                                        <p style={{ fontSize: 20, textAlign: "center", marginBottom: 10, color: "#eaedff" }}>Tus productos</p>
                                    </Col>
                                </Row>
                                <Table hover responsive borderless >
                                    <tbody>
                                        {cart && cart.map(item => (
                                            <tr key={item.id}>
                                                <td style={styles2}>
                                                    <Link to={`/item/${item.id}`} style={{ textDecoration: "none", color: "white" }}>
                                                        <img src={item.pictureUrl} alt={`Imagen de ${item.title}`} style={{ height: 50 }} /> {item.qty} x {item.title} - ${item.qty * item.price}.-
                                                    </Link>
                                                </td>
                                                {/* <td style={styles2}>${item.price * item.qty}</td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Row className="justify-content-center" style={{ marginTop: 40, borderTop: "1px solid #3c50c2" }}>
                                    <Col xs="auto" style={{ marginTop: 20, fontSize: "23px", color: "white", marginBottom: 10 }}>
                                        Importe total a pagar: ${getItemPrice()}.-
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={5} style={{ backgroundColor: "#313447", border: "1px solid #3c50c2", paddingTop: 10, paddingBottom: 10 }}>
                                <Row className="justify-content-center">
                                    <Col>
                                        <p style={{ fontSize: 20, textAlign: "center", marginBottom: 10, color: "#eaedff" }}>Completá con tus datos</p>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Form >
                                        <Row className="align-items-center">
                                            <Col xs={12} className="my-1">
                                                <InputGroup onChange={(e) => setName(e.target.value)} style={{ backgroundColorcolor: "green" }}>
                                                    <InputGroup.Text>Nombre</InputGroup.Text>
                                                    <Form.Control type="text" placeholder="Nombre y Apellido" />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center">
                                            <Col xs={12} className="my-1">
                                                <InputGroup onChange={(e) => setEmail(e.target.value)}>
                                                    <InputGroup.Text>@</InputGroup.Text>
                                                    <Form.Control type="email" placeholder="E-mail" />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center">
                                            <Col xs={12} className="my-1">
                                                <InputGroup onChange={(e) => setPhone(e.target.value)}>
                                                    <InputGroup.Text>Tel</InputGroup.Text>
                                                    <Form.Control type="number" placeholder="Teléfono" />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center" style={{ marginTop: 10 }}>
                                            <Col xs="auto" className="my-1">
                                                <button onClick={(e) => { handleClick(); e.preventDefault() }} className="btn btn-success">Confirmar Compra</button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Row>


                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        );
    };
};

