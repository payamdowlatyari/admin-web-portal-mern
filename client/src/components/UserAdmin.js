import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilesList from './Data/ProfilesList';
import AdminsList from './Data/AdminsList';

import Container from 'react-bootstrap/Container';

class UserAdmin extends Component {
    render() {
        return (
            <Container>
                <div className="admin-content">
                    <br></br>
                    <h1>User Administration</h1>
                    <hr></hr>
                    <Row>
                        <Col>
                            <ProfilesList />
                        </Col>
                        <br></br>
                        <br></br>
                        <Col>
                            <AdminsList />
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default UserAdmin;