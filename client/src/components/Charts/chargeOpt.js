import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from "axios";


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  state = {
    data:[]
  }

  componentDidMount() {
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=chargerCount")
      .then(res => {


        let tmpnum = 0;
        var d = new Date();
        let curHour = d.getHours();
        let count = 7;
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


      })
    }

  render() {
    return (
      <BarChart
        width={1000}
        height={300}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Time" />
        <YAxis label={{ value: 'Time', angle: -90, position: 'insideLeft', offset: -5 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="chargeNow" fill="#8884d8" />
        <Bar dataKey="optimize" fill="#82ca9d" />
      </BarChart>
    );
  }
}
