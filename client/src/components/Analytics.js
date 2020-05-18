import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserTypesList from './Data/UserTypesList';
import PreferenceList from './Data/PreferenceList';


class Analytics extends Component {

    render() {
        return (
            <Container >
                <br></br>
                <h1>Analytics</h1>
                <hr></hr>
                <Row>
                    <Col>
                        <UserTypesList />
                    </Col>
                    <Col>
                        <PreferenceList />
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Analytics;