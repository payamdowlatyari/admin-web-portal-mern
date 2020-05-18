import React, { Component } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('/api/usernames/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
    window.location = '/UserAdmin';
  }

  render() {
    return (
      <div>
        <br></br>
        <Container style={{ width: "30%", zIndex: "0" }}>
          <h3>Create New User</h3>
          <Row>


            <Col>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Username: </label>
                  <input type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}