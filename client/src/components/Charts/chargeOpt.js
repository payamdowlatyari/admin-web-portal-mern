import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from "axios";


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  state = {
    data:[]
  }

  componentDidMount() {
    axios.get("https://api.calplug.club/api.php?collection=chargerCount")
      .then(res => {

        
        let tmpnum = 0;
            //console.log(this.res.data.result)
        var d = new Date();
        var hour = new Array(24);
        hour[0] = 0;
        hour[1] = 1;
        hour[2] = 2;
        hour[3] = 3;
        hour[4] = 4;
        hour[5] = 5;
        hour[6] = 6;
        hour[7] = 7;
        hour[8] = 8;
        hour[9] = 9;
        hour[10] = 10;
        hour[11] = 11;
        hour[12] = 12;
        hour[13] = 13;
        hour[14] = 14;
        hour[15] = 15;
        hour[16] = 16;
        hour[17] = 17;
        hour[18] = 18;
        hour[19] = 19;
        hour[20] = 20;
        hour[21] = 21;
        hour[22] = 22;
        hour[23] = 23;
        
        let curHour = hour[d.getHours()]
        for(let i = 0; i < res.data.result.length; i++)
        {
          tmpnum = res.data.result[i].number
          if(curHour == tmpnum && tmpnum > 7)
          {
            let count = 7;
            for(let j = tmpnum; j > 0; j--)
            {  
              if(count > 0)
              {
                this.setState({ data: res.data.result[j] });
                count--;
                console.log(j)
                console.log(this.state.data)
              }
            }
          }
          else 
          {
            let count = 7;
            for(let k = tmpnum; k > 0;k--)
            {
              if(count > 0)
              {
                this.setState({ data: res.data.result[k]})
                k--;
                count--;
                if (k == 0)
                {
                  k = 23;
                }
              }
            }
          }
        }
        console.log(this.state.data)
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
        <Bar dataKey="optimize" fill="#8884d8" />
        <Bar dataKey="chargeNow" fill="#82ca9d" />
      </BarChart>
    );
  }
}
