import React, { PureComponent } from 'react';
import { Table } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Sunday', Active_user: 4000, Total_user: 2400, amt: 2400,
  },
  {
    name: 'Monday', Active_user: 3000, Total_user: 1398, amt: 2210,
  },
  {
    name: 'Tuesday', Active_user: 2000, Total_user: 9800, amt: 2290,
  },
  {
    name: 'Wednesday', Active_user: 2780, Total_user: 3908, amt: 2000,
  },
  {
    name: 'Thursday', Active_user: 1890, Total_user: 4800, amt: 2181,
  },
  {
    name: 'Friday', Active_user: 2390, Total_user: 3800, amt: 2500,
  },
  {
    name: 'Saturday', Active_user: 3490, Total_user: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (

      <div>
        <Row>
          <Col md="8">
            <h5 style={{ textALign: "middle" }}> Electricity cost</h5>
            <BarChart
              width={700}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Active_user" fill="#8884d8" />
              <Bar dataKey="Total_user" fill="#82ca9d" />
            </BarChart>
          </Col>

          <Col md="4">
            <h5 style={{ textALign: "middle" }}> Cost History</h5>
            <Table className="mb-0" bordered>
              <thead>
                <tr>

                  <th>Time Period</th>
                  <th>High</th>
                  <th>Low</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>Today</td>
                  <td>$ 98 K</td>
                  <td>$ 13.9 K</td>
                </tr>
                <tr>

                  <td>Weekly</td>
                  <td>$ 91.8 K</td>
                  <td>$ 13.5 K</td>
                </tr>
                <tr>

                  <td>Monthy</td>
                  <td>$ 92.3 K</td>
                  <td>$ 13.9 K</td>
                </tr>
                <tr>
                  <td>Yearly</td>
                  <td>$ 98 K</td>
                  <td>$ 12.7 K</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
