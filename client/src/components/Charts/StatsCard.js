import React from "react";
import './StatsCard.css';
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faAngleUp,
  faAngleDown

} from '@fortawesome/free-solid-svg-icons';

class StatsCard extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Jumbotron className="jumbo">
          <Row>
            <Col>
            <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="text-uppercase text-muted mb-0">
                    Total Users
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">350,897</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="fas fa-chart-bar" />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-muted text-sm">
              <div className="widget-description text-success">
                                        <FontAwesomeIcon icon={faAngleUp}/>
                                        <span className="pl-1">
                                    3.45%
                                    </span>
                                    </div>
                                    <span className="text-nowrap">Since last month</span>

              </p>
            </CardBody>
          </Card>
            </Col>
            <Col>
            <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="text-uppercase text-muted mb-0">
                    Active Users
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">84,398</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="fas fa-chart-bar" />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-muted text-sm">
              <div className="widget-description text-danger">
                                        <FontAwesomeIcon icon={faAngleDown}/>
                                        <span className="pl-1">
                                    1.35%
                                    </span>

                                    </div>
                                    <span className="text-nowrap">Since last month</span>

              </p>
            </CardBody>
          </Card>
            </Col>
            <Col>
            <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="text-uppercase text-muted mb-0">
                    Queued Users
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">113,436</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="fas fa-chart-bar" />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-muted text-sm">
              <div className="widget-description text-success">
                                        <FontAwesomeIcon icon={faAngleUp}/>
                                        <span className="pl-1">
                                    6.09%
                                    </span>
                                    </div>
                <span className="text-nowrap">Since last month</span>
              </p>
            </CardBody>
          </Card>
            </Col>
          </Row>
          </Jumbotron>
          
        </Container>
      </>
    );
  }
}

export default StatsCard;