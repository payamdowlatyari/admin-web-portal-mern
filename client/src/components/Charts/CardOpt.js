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
   abandon: 0,
   emission:[]
  };

  componentDidMount() {  //axios api call for retrieving the data from the 'chargerCount' collection in the db
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=chargerCount")
      .then(res => {
        let tmpDemand = 0;


        for(let i = 0; i < res.data.result.length; i++) //adding up the amount of queued chargers in 24 hours
        {
            tmpDemand += res.data.result[i].queuedChargers;
        }
        tmpDemand = Math.ceil(tmpDemand / 24); //calculating the demand for chargers in a 24 hour periodS
        this.setState({ demand: tmpDemand });


      })
                 ////axios api call for retrieving the data from the 'chargerCount' collection in the db
      axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=chargerCount")
      .then(res => {
        let tmpAbandon = 0;


        for(let i = 0; i < res.data.result.length; i++)
        {
            tmpAbandon += res.data.result[i].abandonedChargers;
        }
        tmpAbandon = Math.ceil(tmpAbandon / 24);
        this.setState({ abandon: tmpAbandon });

        
      })
        //axios api call for retrieving the data from the 'emissions' collection in the db
        axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=emissions")
           .then(res => {
            let tmpHour = "";
            //console.log(this.res.data.result)
        var d = new Date();
        var hour = new Array(24); //This array is for after grabbing the current time it is to convert the int into standard time.
        hour[0] = "12 am";        //In our db we have classified each hour as the standard time "1pm, 2pm"
        hour[1] = "1 am";         // so we must change the time format in order to compare to our database
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

        let curHour = hour[d.getHours()]  //converts 

        //console.log(typeof curHour);

        for(let i = 0; i < res.data.result.length; i++)
        {
            tmpHour = res.data.result[i].time;
            if(curHour.replace(" ", "") === tmpHour.replace(" ", "")) {
              this.setState({ emission: res.data.result[i] });
              
            }
        }

           })
            //axios api call for retrieving the data from the 'dailyCarbonEmissions' collection in the db
        axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=dailyCarbonEmission")
        .then(res => {
          let today = "";
          let tmpcur = 0;
          let tmpprev = 0;
          let percentE = 0;
          var d = new Date();
          var weekday = new Array(7); //This is array is for after grabbing the current date
          weekday[0] = "Sunday";  
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";
          let curDate = weekday[d.getDay()] //converts grabbed date into the format that we have used in the collection
          for(let i = 0; i < res.data.result.length; i++)
          {
           
            today = res.data.result[i].date;
            if(today == curDate)  //Going down to list to find the current date
              {
                console.log("if")
                tmpcur = res.data.result[i].emission; //current day was found and setting a new value
                if(i == 0)
                  tmpprev = res.data.result[6].emission; //if it is sunday then this is used to set saturday
                else
                  tmpprev = res.data.result[i - 1].emission; //sets the previous days value
              }
          }
          percentE = tmpcur/tmpprev; //calculation for the reducetion in emission

          if(tmpprev > tmpcur)
          {
           this.setState({ eReduction: Number.parseFloat(percentE).toFixed(3)});
          }
          else
          {
             percentE = 1 - percentE;
             this.setState({eReduction: Number.parseFloat(percentE).toFixed(3)});
          }
        })

    }
   // These cards are associated with the cards shown on the top of the "optimizer page"
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
            {this.state.demand}
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
            {this.state.abandon}
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
}


export default CardOpt
