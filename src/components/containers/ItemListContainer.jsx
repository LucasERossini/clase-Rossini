import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ItemList from "../ItemList";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {id: "01", title: "Producto 1", description: "Buen producto", price: 100, pictureUrl: "" },
          {id: "02", title: "Producto 2", description: "Gran producto", price: 200, pictureUrl: "" },
          {id: "03", title: "Producto 3", description: "El mejor producto", price: 300, pictureUrl: "" }
        ]);
      }, 3000);
    });
    getProducts
      .then((result) => {
        setProductos(result);
      })
      .catch((error) => {
        console.error("Error" ,error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(productos);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>{greeting}</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            {loading && "Loading..."}
            {productos && <ItemList productos={productos}/>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ItemListContainer;
