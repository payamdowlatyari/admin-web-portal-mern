 import React ,{ Fragment }from 'react';
// import Chart from 'react-apexcharts';
import {
    Card,   
    Progress,
    Row,
    Col
  } from "reactstrap";

class Dash extends React.Component {
        

        render(){
    return (
 <Fragment>

<Row>
    <Col md="6" xl="3">
        <Card className="p-3 mb-5">
            <div className="align-box-row">
                <div className="text-first font-size-xl font-weight-bold pr-2">25%</div>
                <div className="flex-grow-1">
                    <Progress animated className="progress-bar-rounded progress-sm" color="first" value="25" />
                </div>
            </div>
            <div className="text-black-50 pt-2">
                Active
</div>
        </Card>
    </Col>
    <Col md="6" xl="3">
        <Card className="p-3 mb-5">
            <div className="align-box-row">
                <div className="text-success font-size-xl font-weight-bold pr-2">75%</div>
                <div className="flex-grow-1">
                    <Progress animated className="progress-bar-rounded progress-sm" color="success" value="75" />
                </div>
            </div>
            <div className="text-black-50 pt-2">
                Queue
</div>
        </Card>
    </Col>
    <Col md="6" xl="3">
        <Card className="p-3 mb-5 bg-asteroid">
            <div className="align-box-row">
                <div className="text-danger font-size-xl font-weight-bold pr-2">12%</div>
                <div className="flex-grow-1">
                    <Progress animated className="progress-bar-rounded bg-white-50 progress-sm" color="danger" value="12" />
                </div>
            </div>
            <div className="text-black-50 pt-2">
                Cancel
</div>
        </Card>
    </Col>
    <Col md="6" xl="3">
        <Card className="p-3 mb-5 bg-midnight-bloom">
            <div className="align-box-row">
                <div className="text-warning font-size-xl font-weight-bold pr-2">88%</div>
                <div className="flex-grow-1">
                    <Progress animated className="progress-bar-rounded bg-white-50 progress-sm" color="warning" value="88" />
                </div>
            </div>
            <div className="text-black-50 pt-2">
                Total
</div>
        </Card>
    </Col>
</Row>

</Fragment> 
    );
}
}
 export default Dash;
