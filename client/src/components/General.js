import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bar from './Charts/Bar';
import Doughnut from './Charts/Doughnut';
import StatsCard from './Charts/StatsCard';
import EnergyDemand from './Charts/EnergyDemand';


class Home extends Component {

  render() {
    return (
      <Container >
        <br></br>
        <h1>General System Performance</h1>
        <hr></hr>
        <StatsCard />
        <Row>
          <Col >
            <Doughnut />
          </Col>
          <Col>
            <Bar />
          </Col>
          <br></br>
        </Row>
        <hr></hr>
        <br></br>
        <Row>
          <Col>
            <EnergyDemand />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;