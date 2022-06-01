import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function ItemListContainer({ greeting }) {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>{greeting}</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ItemListContainer;
