import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { Table } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import axios from "axios";


export default class Completionstatus extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  state = {
    data:[],
    list:[],
    eReduction: 0,

  };

  // componentDidMount() {
  //   axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=webUsers")
  //     .then(res => {
  //       let o = 0;
  //       let p = 0;
  //       let l = 0;
  //       for(let i = 0; i < res.data.result.length; i++) {
  //         if(res.data.result[i].status == "Premature")
  //           p++;
  //         else if (res.data.result[i].status == "Ontime")
  //           o++;
  //         else 
  //           l++;
  //       }
  //       this.setState({ 
  //         data: res.data.result,
  //         pCount: p,
  //         oCount: o,
  //         lCount: l
  //       });
  //     });
  // }
  componentDidMount() {
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=completionStatus")
      .then(res => {
        this.setState({ data: res.data.result });
      })

      axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=completionStatus")
      .then(res => {
        let today = "";
        
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        let curDate = weekday[d.getDay()]
        for(let i = 0; i < res.data.result.length; i++)
        {
          today = res.data.result[i].Date;
          if(today == curDate)
            this.setState({ list: res.data.result[i] });
        }
      })
  }

  render() {
    return (

  <Container>
   <br></br>
    <Row>
     
      
     <Col md="4">
         
          <Table className="mb-0" bordered>
            <thead>
              <tr>
               
                <th>Completion status </th>
                <th>Charger Count</th>
  
              </tr>
            </thead>
         
            <tbody>
              <tr key={this.state.list.Date}>
                
                <td>Premature</td>
                <td> {this.state.list.Premature} </td>
              </tr>
              <tr key={this.state.list.Date}>
                
                <td>Ontime</td>
                <td> {this.state.list.Ontime} </td>
              </tr>
              <tr key={this.state.list.Date}>
                
                <td>Late</td>
                <td> {this.state.list.Late} </td>
              </tr>

              <tr key={this.state.list.Date}>
                <td>Total</td>
                <td> {this.state.list.Total} </td>
              </tr>
          
            </tbody>
          </Table>
         
      </Col>

      <Col md="8">
        
        <BarChart
          width={700}
          height={300}
          data={this.state.data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis label={{ value: 'Count', angle: -90, position: 'insideLeft', offset: -5 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Premature" stackId="a" fill="#8884d8" />
          <Bar dataKey="Ontime" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Late" stackId="a" fill="#81rd5w" />
        </BarChart>
      
      </Col>
    
    </Row>
   
  </Container>
    );
  }
}
