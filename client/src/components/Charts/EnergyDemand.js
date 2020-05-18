import React, { PureComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from 'reactstrap';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine
} from 'recharts';

const data = [
  {
    name: '1 pm', Active_users: 4000, Total_users: 2400, Forecasted: 2400,
  },
  {
    name: '2 pm', Active_users: 3000, Total_users: 1398, Forecasted: 2210,
  },
  {
    name: '3 pm', Active_users: 2000, Total_users: 9800, Forecasted: 2290,
  },
  {
    name: '4 pm', Active_users: 2780, Total_users: 3908, Forecasted: 2000,
  },
  {
    name: '5 pm', Active_users: 1890, Total_users: 4800, Forecasted: 2181,
  },
  {
    name: '6 pm', Active_users: 2390, Total_users: 3800, Forecasted: 2500,
  },
  {
    name: '7 pm', Active_users: 3490, Total_users: 4300, Forecasted: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  render() {
    return (
      <div>
        <Row>
          <Col md="7">
              <header>
                  <h5 style = {{ textALign: "middle" }}> Demand for Electricity</h5>
                  <hr></hr>
              </header>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
              top: 10, right: 30, left: 0, bottom: 0,
              }}
          >
              <defs>
              <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
              </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <ReferenceLine y={9800} label="Max" stroke="red" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="Active_users"  stroke="#8884d8" fillOpacity={1} fill="url(#colorActive)" />
              <Area type="monotone" dataKey="Total_users" stroke="#82ca9d" fillOpacity={1} fill="url(#colorTotal)" />
              <Area type="monotone" dataKey="Forecasted" fillOpacity={1} stroke="#ffc658" fill="url(#colorForecast)" />
            </AreaChart>
        </Col>
      
        <Col md="5">
              <Row>
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
                    <td>8900 MW</td>
                    <td>8200 MW</td>
                  </tr>
                  <tr>
                
                    <td>Week</td>
                    <td> 9100 MW</td>
                    <td> 8000 MW</td>
                  </tr>
                  <tr>
                
                    <td>Month</td>
                    <td> 9500 MW</td>
                    <td> 8000 MW</td>
                  </tr>

                  <tr>
                    <td>Year</td>
                    <td> 9800 MW</td>
                    <td> 6700 MW</td>
                  </tr>
                </tbody>
              </Table>
            </Row>

            <Row>
            <Table className="mb-0" bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>City</th>
                    <th>Electricity Demand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Los Angeles</td>
                    <td>5400 MW</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>San Francisco</td>
                    <td> 5200 MW</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Palo Alto</td>
                    <td> 4800 MW</td>
                  </tr>
                   
                  <tr>
                    <td>4</td>
                    <td>San Diego</td>
                    <td> 4500 MW</td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>Sacramento</td>
                    <td> 4200 MW</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
        </Col>
      </Row>
    </div>
    );
  }
}
