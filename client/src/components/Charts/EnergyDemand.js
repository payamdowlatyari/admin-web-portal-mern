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
    threshold: 0,
    total: 0
  };

  componentDidMount() {
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=chargerCount")
      .then(res => {

    let tmpnum = 0;
        //console.log(this.res.data.result)
    var d = new Date();
    let curHour = d.getHours();
    let count = 13;
    let tempList = [];
    for(let i = curHour; i >= 0; i--)
    {

      if(count > 0)
      {
        for(let j = 0; j < res.data.result.length; j++) {
          tmpnum = res.data.result[j].number;
          if(tmpnum === i) {
            tempList.push(res.data.result[j]);
            break;
          }
        }
        if(i === 0) i = 24;
        count--;
      } else {
        break;
      }
    }
       this.setState({ data: tempList.reverse() });

      });
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=infoHistory")
      .then(res => {
        this.setState({ info: res.data.result });
      });
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=electricityCostSummary")
      .then(res => {
        let tmpTotal = 0;
        for(let i = 0; i < res.data.result.length; i++) {
          tmpTotal += res.data.result[i].activeUser;
        }
        this.setState({ total: tmpTotal });
      });
  }
 
  postData = async () => {

       var d = new Date();
        var hour = new Array(24);
        hour[0] = "12 am";
        hour[1] = "1 am";
        hour[2] = "2 am";
        hour[3] = "3 am";
        hour[4] = "4 am";
        hour[5] = "5 am";
        hour[6] = "6 am";
        hour[7] = "7 am";
        hour[8] = "8 am";
        hour[9] = "9 am";
        hour[10] = "10 am";
        hour[11] = "11 am";
        hour[12] = "12 pm";
        hour[13] = "1 pm";
        hour[14] = "2 pm";
        hour[15] = "3 pm";
        hour[16] = "4 pm";
        hour[17] = "5 pm";
        hour[18] = "6 pm";
        hour[19] = "7 pm";
        hour[20] = "8 pm";
        hour[21] = "9 pm";
        hour[22] = "10 pm";
        hour[23] = "11 pm";

        let curHour = hour[d.getHours()]
    const where = {
        "Time": curHour, // default value
    }
    const threshold = {
        "threshold": 6000, // default value
    }

    let newData = JSON.stringify(threshold);
    let newWhere = JSON.stringify(where);
    const thresholdData = `collection=chargers&param=${newWhere}&data=${newData}`;
 
   
    axios.post('https://cpmqtt1.calit2.uci.edu/update.php', thresholdData, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
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
              <ReferenceLine y={6000} label="Max" stroke="red" />
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
              <td>90210</td>
              <td>5400 MW</td>
            </tr>
            <tr>
              <td>2</td>
              <td>94022</td>
              <td> 5200 MW</td>
            </tr>
            <tr>
              <td>3</td>
              <td>94028</td>
              <td> 4800 MW</td>
            </tr>

            <tr>
              <td>4</td>
              <td>92102</td>
              <td> 4500 MW</td>
            </tr>

            <tr>
              <td>5</td>
              <td>95618</td>
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

