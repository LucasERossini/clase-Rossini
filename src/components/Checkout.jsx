import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { CartContext } from '../context/CartContext';

export default function Checkout() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [idPurchase, setIdPurchase] = useState("");
    const [loading, setLoading] = useState();

    const db = getFirestore();
    const coleccionProductos = collection(db, "orders");

    const { cart, getItemQty, getItemPrice, emptyCart } = useContext(CartContext);

    function handleClick() {
        setLoading(true);
        const order = {
            buyer: { name, email, phone },
            items: cart,
            totalQty: getItemQty(),
            totalPrice: getItemPrice()
        };
        console.log(order);
        if (!name || !email || !phone) {
            alert("Complete todos los campos");
            setLoading(false);
            return;
        } else {
            if (validator.isEmail(email)) {
                addDoc(coleccionProductos, order)
                    .then(({ id }) => {
                        console.log(id)
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
                alert("Email inválido");
            };
        };
    };

    let styles = { padding: 10, textAlign: "center", fontSize: "25px" };

    if (cart.length === 0) {
        return (
            <div style={styles}>
                {idPurchase ?
                    <div>
                        <h1>Compra completada</h1>
                        <h3>Id de la orden: {idPurchase}</h3>
                        <Link to="/">
                            <button className="btn btn-primary">
                                Regresar al Inicio
                            </button>
                        </Link>
                    </div> :
                    <div>
                        <h1> No hay ningún producto en el carrito. </h1>
                        <Link to="/">
                            <button className="btn btn-primary">
                                Volver a la tienda
                            </button>
                        </Link>
                    </div>
                }
            </div>
        );
    } else {
        return (
            <div style={styles}>
                {loading ?
                    <h4>Cargando...</h4> :
                    <div>
                        <h1>Complete para terminar su compra</h1>
                        <Form>
                            <Row className="align-items-center">
                                <Col sm={3} className="my-1">
                                    <InputGroup onChange={(e) => setName(e.target.value)}>
                                        <InputGroup.Text>Nombre</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Ingrese su nombre y apellido" />
                                    </InputGroup>
                                </Col>
                                <Col sm={3} className="my-1">
                                    <InputGroup onChange={(e) => setEmail(e.target.value)}>
                                        <InputGroup.Text>@</InputGroup.Text>
                                        <Form.Control type="email" placeholder="Ingrese su E-mail" />
                                    </InputGroup>
                                </Col>
                                <Col sm={3} className="my-1">
                                    <InputGroup onChange={(e) => setPhone(e.target.value)}>
                                        <InputGroup.Text>Tel</InputGroup.Text>
                                        <Form.Control type="number" placeholder="Ingrese su Teléfono" />
                                    </InputGroup>
                                </Col>
                                <Col sm={3} className="my-1">
                                    <button onClick={() => handleClick()} className="btn btn-success">Confirmar Compra</button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                }
            </div>
        );
    };
};

