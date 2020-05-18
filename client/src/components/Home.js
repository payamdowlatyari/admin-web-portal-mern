import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Home.css';
import opt from '../images/optimizer.png';
import gen from '../images/general.png';
import user from '../images/user.png';
import { NavLink } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Home extends Component {

  render() {
    return (
      <Container >
        <h1 className="dashboard"><strong>Dashboard</strong></h1>
        <Jumbotron style={{
          position: 'relative',
          background: 'transparent',
          height: '100%',
          width: '100%',
          zIndex: '9999999'
        }} >
          <Row>
            <Col>
              <NavLink to="/General">
                <Card.Img className="img-link" variant="top" src={gen} />
              </NavLink>
            </Col>

            <Col >
              <NavLink to="/Optimizer">
                <Card.Img className="img-link" variant="top" src={opt} />
              </NavLink>
            </Col>

            <Col>
              <NavLink to="/UserAdmin">
                <Card.Img className="img-link" variant="top" src={user} />
              </NavLink>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default Home;