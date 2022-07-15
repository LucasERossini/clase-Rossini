import React from 'react'
import { Card, Placeholder, Row } from 'react-bootstrap';

export default function PlaceholderItem() {
    return (
        [...Array(6)].map((e, i) =>
            <Card key={i} style={{ marginTop: 40, width: "18rem", paddingTop: 240, marginRight: 9, marginLeft: 9, marginBottom: 20, borderRadius: 20, backgroundColor: "#313447" }}>
                <Card.Body style={{ borderTop: "1px solid #3c50c2" }}>
                    <Placeholder as={Card.Title} animation="wave">
                        <Placeholder xs={12} bg="light" />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="wave">
                        <Placeholder xs={7} bg="light" /> <Placeholder xs={4} bg="light" /> <Placeholder xs={4} bg="light" />{' '}
                        <Placeholder xs={6} bg="light" /> <Placeholder xs={8} bg="light" />
                    </Placeholder>
                    <Row className="justify-content-center" >
                        <Placeholder.Button style={{ backgroundColor: "#3c50c2" }} />
                    </Row>
                </Card.Body>
            </Card>
        )
    );
};