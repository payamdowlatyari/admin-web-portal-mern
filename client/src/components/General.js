import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bar from './Charts/Bar';
import Doughnut from './Charts/Doughnut';
import StatsCard from './Charts/StatsCard';
import EnergyDemand from './Charts/EnergyDemand';
import TotalChart from './Charts/totUChart';
import ChargeOpt from './Charts/chargeOpt';

class Home extends Component {

  render() {
    return (
      <Container>
        <br></br>
        <h1>General System Performance</h1>
        <hr></hr>

        <Row>
          <StatsCard />
        </Row>


        <Col md="12" className="card">
          <br></br>
          <h5 style={{ textALign: "middle" }}> Charger Completion Status</h5>
          <span className="block-example border border-dark"></span>
          <br></br>
          <span className="block-example border border-dark">
            <TotalChart />
            <br></br>
          </span>
        </Col>

        <br></br>
        <Col md="12" className="card">
          <br></br>
          <h5 style={{ textALign: "middle" }}> Charger Option</h5>
          <span className="block-example border border-dark"></span>
          <br></br>
          <span className="block-example border border-dark">
            <ChargeOpt />
            <br></br>
          </span>
        </Col>


        <br></br>

        <hr></hr>
        <br></br>
        <Row>
          <Col md="12">
            <EnergyDemand />
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Home;