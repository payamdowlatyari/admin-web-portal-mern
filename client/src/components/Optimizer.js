import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Electricitycost from './Charts/Electricitycost';
import Completionstatus from './Charts/Completionstatus';
import Carbons from './Charts/Carbons';
import CardOpt from './Charts/CardOpt';

class Optimizer extends Component {

    render() {
        return (
            <Container >
                <br></br>
                <h1>Metric Tools Page</h1>
                <hr></hr>
                <Row>
                    <Col md="12" className="card">
                        <CardOpt />
                    </Col>
                    <br></br>
                    <Col md="12" className="card">
                        <Completionstatus />
                    </Col>
                </Row>
                <hr></hr>
                <Col md="12" className="card">
                    <Electricitycost />
                    <br></br>
                </Col>
                <br></br>
                <hr></hr>
                <Row>
                    <Carbons />
                </Row>
            </Container>
        );
    }
}

export default Optimizer;