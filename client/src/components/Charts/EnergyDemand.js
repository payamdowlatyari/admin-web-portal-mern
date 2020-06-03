import React, { PureComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import { Table } from 'reactstrap';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine
} from 'recharts';
import axios from "axios";


export default class EnergyDemand extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  state = {
    today_high: 50,
    today_low: 25,
    data: [],
    info: [],
    total: 0
  };
  
  componentDidMount() {
    axios.get("https://api.calplug.club/api.php?collection=chargerCount")
      .then(res => {

    let tmpnum = 0;
        //console.log(this.res.data.result)
    var d = new Date();        
    let curHour = d.getHours();
    let count = 16;
    let tempList = [];
    console.log(curHour);
    for(let i = curHour; i >= 0; i--)
    {
      
      if(count > 0)
      {
        for(let j = 0; j < res.data.result.length; j++) {
          tmpnum = res.data.result[j].number;
          if(tmpnum === i) {
            tempList.push(res.data.result[j]);
            console.log(res.data.result[j]);
            break;
          }
        }
        if(i == 0) i = 24;
        count--;
      } else {
        break;
      }
    }
       this.setState({ data: tempList.reverse() });
        
      });
    axios.get("https://api.calplug.club/api.php?collection=infoHistory")
      .then(res => {
        this.setState({ info: res.data.result });
      });
    axios.get("https://api.calplug.club/api.php?collection=electricityCostSummary")
      .then(res => {
        let tmpTotal = 0;
        for(let i = 0; i < res.data.result.length; i++) {
          tmpTotal += res.data.result[i].activeUser;
        }
        this.setState({ total: tmpTotal });
      });
  }
  
  render() {
    return (
      <Container>
          
          <header>
          <h3 style = {{ textALign: "middle" }}> Demand for Electricity</h3>
         
          </header>
            <AreaChart
              width={1100}
              height={500}
              data={this.state.data}
              margin={{
              top: 15, right: 30, left: 0, bottom: 0,
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
              <XAxis dataKey="Time" />
              <YAxis label={{ value: 'MW', angle: -90, offset: 5, position:'insideLeft'}}/>
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="activeChargers"  stroke="#8884d8" fillOpacity={1} fill="url(#colorActive)" />
              <Area type="monotone" dataKey="totalChargers" stroke="#82ca9d" fillOpacity={1} fill="url(#colorTotal)" />
              <Area type="monotone" dataKey="forecast" fillOpacity={1} stroke="#ffc658" fill="url(#colorForecast)" />
            </AreaChart>

            <br></br>
       
      <Row>
        <Col md="6"> 
          <Table className="mb-0" hover bordered>
          <thead>
            <tr>
              
              <th>Time Period</th>
              <th>High</th>
              <th>Low</th>
              
            </tr>
          </thead>
          <tbody>
          {this.state.info.map(one => <tr key={one.date}>
            <td>{one.date}</td>
            <td>{one.highestcarbon}</td>
            <td>{one.lowestcarbon}</td>
            </tr>)}
          </tbody>
        </Table>
      </Col>

      <Col md="6"> 
        <Table className="mb-0" hover bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Zip Code</th>
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
        </Col>
      </Row>
    </Container>
    );
  }
}

