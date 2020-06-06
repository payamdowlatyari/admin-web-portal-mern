import React, { PureComponent } from 'react';
import { Table } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import axios from "axios";

//<h5 style = {{ textALign: "middle" }}> Cost History</h5>

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  state = {
    data: [],
    cost: []
  };

  componentDidMount() {
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=dailyUserElectricityCost")
      .then(res => {
        this.setState({ data: res.data.result });
      })

    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=infoHistory")
    .then(res => {
      this.setState({ cost: res.data.result });
    })
  }

  render() {
    return (

      <Container fluid>
        <br></br>
      <Row>
        <Col md="8">
            <BarChart
              width={700}
              height={300}
              data={this.state.data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis label={{ value: 'Weekly Cost', angle: -90, position: 'insideLeft', offset: -5}} />
              <Tooltip />
              <Legend />
              <Bar dataKey="activeU_Cost" fill="#8884d8" />
              <Bar dataKey="totalU_Cost" fill="#82ca9d" />
            </BarChart>
        </Col>

        <Col md="4">
        
            <Table className="mb-0" bordered>
            <thead>
              <tr>
               
                <th>Time Period</th>
                <th>High</th>
                <th>Low</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cost.map(cost => <tr key={cost.date}>
                <td> {cost.date} </td>
                <td> {cost.highestcost} </td>
                <td> {cost.lowestcost} </td>
              </tr>)}
            </tbody>
          </Table>
        </Col>
      </Row>
      </Container>
    );
  }
}
