// @ts-nocheck
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import PlaceholderItem from '../PlaceholderItem';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState();
  const [categoria, setCategoria] = useState();

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setCategoria("");

    const coleccion = 'items';
    const db = getFirestore();
    const coleccionProductos = collection(db, coleccion);

    getDocs(coleccionProductos)
      .then((res) => {
        id ? setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })).filter(producto => producto.category === id)) : setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        id ? setCategoria(id) : setCategoria("Todos nuestros productos");
      })
      .catch((error) => {
        console.error("Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div style={{ backgroundColor: "#5c6286", paddingTop: 90 , paddingBottom: 40 }}>
        <Container>
          <Row className="justify-content-center">
            <Col md="auto">
              <h2 style={{ textAlign: "center", marginBottom: 20, color: "#eaedff" }}>{categoria}</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <Row className="justify-content-center">
                {loading ? <PlaceholderItem/> : <ItemList productos={productos} />}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};