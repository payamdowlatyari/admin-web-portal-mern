import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import axios from "axios";

export default class totUChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  state = {
    data: []
  }

  // componentDidMount() {
  //   axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=chargerCount")
  //     .then(res => {
  //       this.setState({ data: res.data.result });
  //       console.log(this.state.data);
  //     })
  // }
  //axios api call for retrieving the data from the 'chargerCount' collection in the db
  componentDidMount() {
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=chargerCount")
      .then(res => {


        let tmpnum = 0;
        var d = new Date();
        let curHour = d.getHours();
        let count = 17;
        let tempList = [];
        console.log(curHour);
        for (let i = curHour; i >= 0; i--) {

          if (count > 0) {
            for (let j = 0; j < res.data.result.length; j++) {
              tmpnum = res.data.result[j].number; //Goes through the collection list.
              if (tmpnum === i) {  //once the number is found the list will be pushed onto this temp array.
                tempList.push(res.data.result[j]);
                console.log(res.data.result[j]);
                break;
              }
            }
            if (i === 0) i = 24; //if the time reaches zero which is 12 am it will reset back to 24 to show 11 oclock.
            count--;
          } else {
            break;
          }
        }
        this.setState({ data: tempList.reverse() });


      })
  }
  // This graph shows the amount of active and queued chargers that are in the system.
  render() {
    return (
      <AreaChart
        width={1000}
        height={300}
        data={this.state.data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="activeChargers" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="queuedChargers" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

        <br></br>
      </AreaChart>
    );
  }
}
