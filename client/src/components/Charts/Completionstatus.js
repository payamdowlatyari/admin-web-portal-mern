import React, { PureComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from 'reactstrap';
import {
  PieChart, Pie, Cell, Tooltip,
} from 'recharts';

const data = [
  { name: 'Premature', value: 400 },
  { name: 'Ontime', value: 300 },
  { name: 'Late', value: 300 },

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default class Completionstatus extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';


  render() {
    return (
      <div>
        <Row>
          <Col md="4">
            <br></br>
            <h5 style={{ textALign: "middle" }}> Charger Completion Status</h5>
            <br></br>
            <br></br>
            <Table className="mb-0" bordered>
              <thead>
                <tr>

                  <th>Completion status </th>
                  <th>Charger Count</th>

                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>Premature</td>
                  <td> 400 </td>
                </tr>
                <tr>

                  <td>Ontime</td>
                  <td> 300 </td>
                </tr>
                <tr>

                  <td>Late</td>
                  <td> 300 </td>
                </tr>

              </tbody>
            </Table>
          </Col>

          <Col md="2">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={100}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
              <Tooltip />
            </PieChart>
          </Col>

        </Row>
      </div>

    );
  }
}
