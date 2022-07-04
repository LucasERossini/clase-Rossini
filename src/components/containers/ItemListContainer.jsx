// @ts-nocheck
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";

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
      id ? setProductos(res.docs.map((doc) => ({id: doc.id, ...doc.data()})).filter(producto => producto.category === id)) : setProductos(res.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      id && setCategoria(id);
      })
    .catch((error) => {
        console.error("Error" ,error);
      })
    .finally(() => {
        setLoading(false);
      });
  }, [id]);

  console.log(productos);

  return (
    <>
      <div style={{marginTop: 30}}>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              {categoria && <h2 style={{textAlign: "center"}}>{categoria}</h2>}
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              {loading && "Loading..."}
              {productos && <ItemList productos={productos}/>}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};