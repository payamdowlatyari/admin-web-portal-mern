import React, { Component } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class CreateAdmin extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            date: new Date()
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const admin = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            date: this.state.date
        }

        console.log(admin);

        axios.post('/api/users/add', admin)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            email: '',
            password: '',
            date: new Date()
        })
        window.location = '/UserAdmin';
    }

    render() {
        return (
            <div>
                <br></br>
                <Container style={{ width: "30%", zIndex: "0" }}>
                    <h3>Create New Admin</h3>
                    <Row>


                        <Col>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Name: </label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                    />
                                    <label>Email: </label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                    />
                                    <label>Password: </label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Create Admin" className="btn btn-primary" />
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}