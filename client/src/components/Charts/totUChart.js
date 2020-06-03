import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Brush
} from 'recharts';
import axios from "axios";

export default class totUChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  state = {
    data: []
  }

  componentDidMount() {
    axios.get("https://api.calplug.club/api.php?collection=chargerCount")
      .then(res => {
        this.setState({ data: res.data.result });
        console.log(this.state.data);
      })
  }

  render() {
    return (
      <AreaChart
        width={1000}
        height={500}
        data={this.state.data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Time" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="activeChargers" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="queuedChargers" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Brush />
      </AreaChart>
    );
  }
}
