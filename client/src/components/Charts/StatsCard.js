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
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleUp,
  faAngleDown

} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

class StatsCard extends React.Component {

  state = {
    total: 0,
    active: 0,
    queued: 0,
    abandoned: 0,
    idle: 0,
    disconnected: 0
  }

  componentDidMount() {
    axios.get("https://api.calplug.club/api.php?collection=chargerCount")
      .then(res => {
        let tUser = 0;
        let qUser = 0;
        let aUser = 0;
        let iUser = 0;
        let dUser = 0;
        let abUser = 0;

        for (let i = 0; i < res.data.result.length; i++) {


          tUser += res.data.result[i].totalChargers;
          qUser += res.data.result[i].queuedChargers;
          aUser += res.data.result[i].activeChargers;
          iUser += res.data.result[i].idleChargers;
          dUser += res.data.result[i].disconnectedChargers;
          abUser += res.data.result[i].abandonedChargers;

        }
        this.setState({ total: tUser });
        this.setState({ queued: qUser });
        this.setState({ active: aUser });
        this.setState({ idle: iUser });
        this.setState({ disconnected: dUser });
        this.setState({ abandoned: abUser });
      });
  }

  render() {
    return (
      <>
        <Container>

          <Row>
            <Col>
              <Card className="card-stats mb-4 mb-lg-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle className="text-uppercase text-muted mb-0">
                        Total Users
                  </CardTitle>
                      <span className="h2 font-weight-bold mb-0"> {this.state.total} </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fas fa-chart-bar" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <div className="widget-description text-success">
                      <FontAwesomeIcon icon={faAngleUp} />
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
                      <span className="h2 font-weight-bold mb-0">{this.state.active}</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fas fa-chart-bar" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <div className="widget-description text-danger">
                      <FontAwesomeIcon icon={faAngleDown} />
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
                      <span className="h2 font-weight-bold mb-0">{this.state.queued}</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fas fa-chart-bar" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <div className="widget-description text-success">
                      <FontAwesomeIcon icon={faAngleUp} />
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

          <Jumbotron className="jumbo">
            <Row>
              <Col>
                <Card className="card-stats mb-4 mb-lg-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle className="text-uppercase text-muted mb-0">
                          Idle Users
                  </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{this.state.idle}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <div className="widget-description text-danger">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className="pl-1">
                          0.35%
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
                          Abandoned Users
                  </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{this.state.abandoned}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <div className="widget-description text-danger">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className="pl-1">
                          0.35%
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
                          Disconnected Users
                  </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{this.state.disconnected}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <div className="widget-description text-danger">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className="pl-1">
                          0.75%
                                    </span>

                      </div>
                      <span className="text-nowrap">Since last month</span>

                    </p>
                  </CardBody>
                </Card>
              </Col>

            </Row>
            <br></br>
            {/* <Progress multi>
             <Progress bar value="15">Idle</Progress>
             <Progress bar color="success" value="40">Active</Progress>
             <Progress bar color="info" value="35">Queued</Progress>
             <Progress bar color="warning" value="10">Disconnected</Progress>
          </Progress> */}

          </Jumbotron>



        </Container>
      </>
    );
  }
}

export default StatsCard;