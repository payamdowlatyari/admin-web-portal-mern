import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Electricitycost from './Charts/Electricitycost';
import Completionstatus from './Charts/Completionstatus';
import Carbons from './Charts/Carbons';
import CardOpt from './Charts/CardOpt';


class Optimizer extends Component {

    render(){
        return(
            <Container >
              <br></br>
              <h1 style = {{ textALign: "middle"}}>Metric Tools Page</h1>
              <hr></hr>
              <br></br>
                <Row>

                    <Col md="12" className="card">
                      <CardOpt/>
                    </Col>
                    <br></br>
                    
                    <Col md="12" className="card"> 
                    <br ></br>
                    <h5 style = {{ textALign: "middle" }}> Charger Completion Status</h5>
                    <span className="block-example border border-dark"></span>
                    <br></br>
                    <span className="block-example border border-dark">
                        <Completionstatus/>
                    </span>
                    </Col>    
                    

                </Row>
                <hr></hr>
                <Col md="12" className="card">
                    <br></br>
                    <h5 style = {{ textALign: "middle" }}> Electricity cost</h5> 
                    <span className="block-example border border-dark"></span>
                    <br></br>
                   <span className="block-example border border-dark">
                     <Electricitycost/>
                   </span>
                </Col>
               
                <hr></hr>
                <br></br>
                <Col md="12" className="card">
                  
                      
                        <h5 style = {{ textALign: "middle" }}> Carbon Emissions</h5> 
                        <span className="block-example border border-dark"></span>
                      
    
                
               
                  
                  <br></br>
                        
                        <Carbons/>
                        
                </Col>
                    
             


                   
            </Container>
        );
    }
}

export default Optimizer;