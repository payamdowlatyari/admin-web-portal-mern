import React, { Component } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeMake = this.onChangeMake.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onChangeSociety = this.onChangeSociety.bind(this);
    this.onChangeEnvironment = this.onChangeEnvironment.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeProvider = this.onChangeProvider.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      make: '',
      model: '',
      cost: 0,
      society: 0,
      environment: 0,
      location: 0,
      provider: '',
      start: new Date(),
      end: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('/api/profiles/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          make: response.data.make,
          model: response.data.model,
          cost: response.data.cost,
          society: response.data.society,
          environment: response.data.environment,
          location: response.data.location,
          provider: response.data.provider,
          start: new Date(response.data.start),
          end: new Date(response.data.end)
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('/api/usernames/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeMake(e) {
    this.setState({
      make: e.target.value
    })
  }

  onChangeModel(e) {
    this.setState({
      model: e.target.value
    })
  }

  onChangeCost(e) {
    this.setState({
      cost: e.target.value
    })
  }

  onChangeSociety(e) {
    this.setState({
      society: e.target.value
    })
  }

  onChangeEnvironment(e) {
    this.setState({
      environment: e.target.value
    })
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }
  onChangeProvider(e) {
    this.setState({
      provider: e.target.value
    })
  }
  onChangeStart(date) {
    this.setState({
      start: date
    })
  }

  onChangeEnd(date) {
    this.setState({
      end: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const profile = {
      username: this.state.username,
      make: this.state.make,
      model: this.state.model,
      cost: this.state.cost,
      society: this.state.society,
      environment: this.state.environment,
      location: this.state.location,
      provider: this.state.provider,
      start: this.state.start,
      end: this.state.end

    }

    console.log(profile);

    axios.post('/api/profiles/update/' + this.props.match.params.id, profile)
      .then(res => console.log(res.data));

    window.location = '/UserAdmin';
  }

  render() {
    return (
      <Container style={{ width: '50%' }}>
        <br></br>
        <h3>Edit User Profile</h3>
        <form onSubmit={this.onSubmit}>

          <Row>
            <Col>


              <div className="form-group">
                <label>Username: </label>
                <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}>
                  {
                    this.state.users.map(function (user) {
                      return <option
                        key={user}
                        value={user}>{user}
                      </option>;
                    })
                  }
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="form-group">
                <label>Make: </label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.make}
                  onChange={this.onChangeMake}
                />
              </div>

              <div className="form-group">
                <label>Cost: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.cost}
                  onChange={this.onChangeCost}
                />
              </div>
              <div className="form-group">
                <label>Society: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.society}
                  onChange={this.onChangeSociety}
                />
              </div>
              <div className="form-group">
                <label>Environment: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.environment}
                  onChange={this.onChangeEnvironment}
                />
              </div>
              <div className="form-group">
                <label>Start Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.start}
                    onChange={this.onChangeStart}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <label>Model: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.model}
                  onChange={this.onChangeModel}
                />
              </div>
              <div className="form-group">

                <div className="form-group">
                  <label>Location: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                  />
                </div>
                <div className="form-group">
                  <label>Provider: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.provider}
                    onChange={this.onChangeProvider}
                  />
                </div>
              </div>


              <div className="form-group">
                <label>End Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.end}
                    onChange={this.onChangeEnd}
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