import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
    return (
        <div style={{paddingTop: 40, paddingBottom: 80, backgroundColor: "#313447"}}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <img src="/images/computadora.png" style={{ height: 60, marginRight: 10 }} alt="Computación Logo"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <p style={{ color: "#eaedff" , fontSize: 30}}>CompuMarket</p>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{ borderTop: "1px solid #3c50c2" }}>
                    <Col xs="auto">
                        <p style={{ color: "#eaedff" , paddingTop: 20, textAlign: "center"}}>Ecommerce desarrollado por Lucas Rossini para el curso de React JS de Coderhouse</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <a href="https://github.com/LucasERossini/clase-Rossini" target="_blank" rel="noreferrer">
                            <img src="/images/GitHub-Mark-Light-64px.png" style={{ height: 35, marginRight: 10 }} alt="GitHub Logo"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};