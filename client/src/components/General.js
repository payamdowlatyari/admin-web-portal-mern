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
      <Container >
        <br></br>
        <h1>General System Performance</h1>
        <hr></hr>
      
        <Row>
          <StatsCard />
        </Row>
        
        
        
        
        <h5 style = {{ textALign: "middle" }}> Charger Completion Status</h5>
        <br></br>
        
        <span className="block-example border border-dark"></span>
        
        <br></br>
        <Row>
        <TotalChart/>
        </Row>
        
        <br></br>
      
        <ChargeOpt/>
          
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