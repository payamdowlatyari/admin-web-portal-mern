import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
//import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAngleUp,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import './CardOpt.css';
import axios from "axios";

class CardOpt extends Component{

  state = {
   demand: 0,
   emission:[]
  };    

  componentDidMount() {
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=chargerCount")
      .then(res => {
        let tmpDemand = 0;


        for(let i = 0; i < res.data.result.length; i++)
        {
            tmpDemand += res.data.result[i].queuedChargers;
        }
        tmpDemand = Math.ceil(tmpDemand / 24);
        this.setState({ demand: tmpDemand });

        
      })
    
        axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=emissions")
           .then(res => {
            let tmpHour = "";
            //console.log(this.res.data.result)
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
        
        //console.log(typeof curHour);
        
        for(let i = 0; i < res.data.result.length; i++)
        {
            tmpHour = res.data.result[i].time;
            if(curHour.replace(" ", "") === tmpHour.replace(" ", "")) {
              console.log(res.data.result[i]);
              this.setState({ emission: res.data.result[i] });

            }
        }
        
           })

        axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=dailyCarbonEmission")
        .then(res => {
          let today = "";
          let tmpcur = 0;
          let tmpprev = 0;
          let percentE = 0;
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
            today = res.data.result[i].date;
            if(today == curDate)
              {
                tmpcur = res.data.result[i].dailyemission;
                tmpprev = res.data.result[i - 1].dailyemission;
              }  
          }
          percentE = tmpcur/tmpprev;

          if(tmpprev > tmpcur)
          {
           this.setState({ eReduction: percentE});
          }
          else 
          {
             percentE = 1 - percentE;
             this.setState({eReduction: Number.parseFloat(percentE).toFixed(3)});
          } 
        })
       
    } 
     
  render(){

  return (
    <Container>
    <Row>
     <Col md="3">
     
        <Card className="root" border="danger">
        <CardContent>
            <Typography className="title" variant="h5" component="h2" gutterBottom>
            Rate of Demand for Chargers
            </Typography>
            <Typography variant="h5" component="h2">
            125K
            </Typography>
            <Typography className="pos" color="textSecondary">
            demanded per hour
            </Typography>
            <Typography className="widget-description text-danger" variant="body2" component="p">
            <FontAwesomeIcon icon={faAngleDown}/>
            20.3%
            </Typography>
        </CardContent>
        </Card>
      </Col>

     <Col md="3">
        <Card className="root" border="success">
        <CardContent>
        <Typography className="title" variant="h5" component="h2" gutterBottom>
           Avg rate of Abandoned Chargers
        </Typography>
        <Typography variant="h5" component="h2">
            {this.state.demand} 
        </Typography>
        <Typography className="pos" color="textSecondary">
            per hour
        </Typography>
        <Typography className="widget-description text-success" variant="body2" component="p">
        <FontAwesomeIcon icon={faAngleUp}/>
            15.3%
        </Typography>
       </CardContent>
       </Card>
     </Col>
     <Col md="3">
        <Card className="root" border="success">
        <CardContent>
        <Typography className="title" variant="h5" component="h2" gutterBottom>
           Reduction in CO2 emissions
        </Typography>
        <Typography variant="h5" component="h2">
             {this.state.eReduction}
        </Typography>
        <Typography className="pos" color="textSecondary">
            difference
        </Typography>
        <Typography className="widget-description text-success" variant="body2" component="p">
        <FontAwesomeIcon icon={faAngleUp}/>
            24.6%
        </Typography>
        </CardContent>
        </Card>
     </Col>
     <Col md="3">
        <Card className="root" border="danger">
        <CardContent>
        <Typography className="title" variant="h5" component="h2" gutterBottom>
           Current C02 emission rate
        </Typography>
        <Typography variant="h5" component="h2">
            {this.state.emission.CO2rate}
        </Typography>
        <Typography className="pos" color="textSecondary">
            mTCO2/MWh
        </Typography>
        <Typography className="widget-description text-danger" variant="body2" component="p">
        <FontAwesomeIcon icon={faAngleDown}/>
            14.6%
        </Typography>
        </CardContent>
        </Card>
     </Col>
    </Row>
    </Container>


    );
   }
  
    getBorder() {
      let borders = "primary";
      this.state.demCharger = this.state.demCharger - this.state.predemCharger;
      borders += (this.state.demCharger >= 0) ? "success" : "danger";
      return borders;
    }
}


export default CardOpt
