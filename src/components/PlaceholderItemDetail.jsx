import React from 'react'
import { Col, Container, Row, Card, Placeholder, ListGroup } from 'react-bootstrap';

export default function PlaceholderItemDetail() {
    return (
        <Container>
            <Row className="justify-content-center" style={{ paddingTop: 40, paddingBottom: 40 }}>
                <Card style={{ width: "20rem", backgroundColor: "#313447", paddingTop: 190, paddingBottom: 185, paddingLeft: 20, paddingRight: 20 }}>
                </Card>
                <Card style={{ width: '20rem', backgroundColor: "#313447", color: "white", padding: 20 }}>
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="wave">
                            <Placeholder xs={12} bg="light" size="lg" />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="wave" style={{ paddingTop: 20 }}>
                            <Placeholder xs={7} bg="light" /> <Placeholder xs={4} bg="light" /> <Placeholder xs={4} bg="light" />{' '}
                            <Placeholder xs={6} bg="light" />
                        </Placeholder>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item style={{ backgroundColor: "#313447", color: "white", borderTop: "1px solid #3c50c2" }}>
                            <Placeholder as={Card.Text} animation="wave">
                                <Placeholder xs={7} bg="light" />
                            </Placeholder>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#313447", color: "white", borderTop: "1px solid #3c50c2" }}>
                            <Placeholder as={Card.Text} animation="wave">
                                <Placeholder xs={7} bg="light" />
                            </Placeholder>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#313447", color: "white", borderTop: "1px solid #3c50c2", borderBottom: "1px solid #3c50c2" }}>
                            <Placeholder as={Card.Text} animation="wave">
                                <Placeholder xs={7} bg="light" />
                            </Placeholder>
                        </ListGroup.Item>
                        <Row className="justify-content-center" style={{ paddingTop: 10 }}>
                            <Col xs="auto">
                                <Placeholder.Button style={{ backgroundColor: "#3c50c2", borderRadius: 10, paddingRight: 23 }} />
                            </Col>
                            <Col xs="auto">
                                <Placeholder as={Card.Text} animation="wave">
                                    <Placeholder xs={12} bg="light" style={{ padding: 16 }} size="lg" />
                                </Placeholder>
                            </Col>
                            <Col xs="auto" >
                                <Placeholder.Button style={{ backgroundColor: "#3c50c2", borderRadius: 10, paddingRight: 23 }} />
                            </Col>
                        </Row>
                        <Row className="justify-content-center" style={{ paddingTop: 10 }}>
                            <Col xs="auto">
                                <Placeholder.Button style={{ backgroundColor: "#3c50c2", borderRadius: 10, paddingRight: 140 }} />
                            </Col>
                        </Row>
                    </ListGroup>
                </Card>
            </Row>
        </Container>
    );
};