import React, { Component } from 'react';
import './UserAdmin.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilesList from './Data/ProfilesList';
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

                    </Row>
                </div>
            </Container>
        );
    }
}

export default UserAdmin;