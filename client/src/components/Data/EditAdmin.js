import React, { Component } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container';

export default class EditAdmin extends Component {
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

    componentDidMount() {
        axios.get('/api/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    password: response.data.password,
                    date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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

        axios.post('/api/users/update/' + this.props.match.params.id, admin)
            .then(res => console.log(res.data));

        window.location = '/UserAdmin';
    }

    render() {
        return (
            <Container style={{ width: '50%' }}>
                <br></br>
                <h3>Edit User Admin</h3>
                <form onSubmit={this.onSubmit}>

                    <Row>
                        <Col>


                            <div className="form-group">
                                <label>Name: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label>Email: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                />
                            </div>
                            <div className="form-group">
                                <label>Date: </label>
                                <div>
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.onChangeDate}
                                    />
                                </div>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <input type="submit" value="Edit User Profile" className="btn btn-primary" />
                            </div>
                        </Col>
                    </Row>

                </form>
            </Container>
        )
    }
}