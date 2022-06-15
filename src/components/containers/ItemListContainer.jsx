import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState();
  const [loading, setLoading] = useState();
  const [categoria, setCategoria] = useState();

  const { id } = useParams();

  useEffect(() => {
    setProductos([]);
    setLoading(true);
    setCategoria("");

    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( 
          fetch("/productos.json")
            .then(response => response.json())
        );
      }, 3000);
    });
    getProducts
      .then((result) => {
        if (id === 'motherboard') {
          setProductos(
            result.filter(producto => producto.category === 'motherboard')
          );
          setCategoria('Motherboards');
        } else if (id === 'cpu') {
          setProductos(
            result.filter(producto => producto.category === 'procesador')
          );
          setCategoria('Procesadores');
        } else if (id === 'fuente') {
          setProductos(
            result.filter(producto => producto.category === 'fuente')
          );
          setCategoria('Fuentes');
        }
        else {
          setProductos(result);
        }
        
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
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>{greeting}</h1>
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
    </>
  );
}

export default ItemListContainer;
