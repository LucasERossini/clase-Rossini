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
          [
            { id: "01", category: "mother", title: "Motherboard 1", description: "Buen mother", detail: "Buena mother. Cumple con funciones básicas.", price: 150, pictureUrl: "", stock: 10, color: "negro"},
            { id: "02", category: "mother", title: "Motherboard 2", description: "Gran mother", detail: "Gran mother. Cumple con funciones básicas y extras.", price: 250, pictureUrl: "", stock: 10, color: "gris oscuro"},
            { id: "03", category: "procesador", title: "Procesador 1", description: "Buen procesador", detail: "Buen procesador. Cumple con funciones básicas.", price: 200, pictureUrl: "", stock: 10, color: "azul"},
            { id: "04", category: "procesador", title: "Procesador 2", description: "Gran procesador", detail: "Gran procesador. Cumple con funciones básicas y extras.", price: 300, pictureUrl: "", stock: 10, color: "blanco"},
            { id: "05", category: "fuente", title: "Fuente 1", description: "Buen fuente", detail: "Buena fuente. Cumple con funciones básicas.", price: 100, pictureUrl: "", stock: 10, color: "negro"},
            { id: "06", category: "fuente", title: "Fuente 2", description: "Gran fuente", detail: "Gran fuente. Cumple con funciones básicas y extras.", price: 200, pictureUrl: "", stock: 10, color: "blanco"}
        ]
        );
      }, 3000);
    });
    getProducts
      .then((result) => {
        if (id === 'mother') {
          setProductos(
            result.filter(producto => producto.category === 'mother')
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
