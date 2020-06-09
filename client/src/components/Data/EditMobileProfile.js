import React, { Component } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container';

export default class EditMobileProfile extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);
        this.onChangeSociety = this.onChangeSociety.bind(this);
        this.onChangeEnvironment = this.onChangeEnvironment.bind(this);
        this.onChangeZipcode = this.onChangeZipcode.bind(this);
        this.onChangeProvider = this.onChangeProvider.bind(this);
        this.onChangeStarttime = this.onChangeStarttime.bind(this);
        this.onChangeEndtime = this.onChangeEndtime.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            make: '',
            model: '',
            cost: 0,
            society: 0,
            environment: 0,
            zipcode: '',
            provider: '',
            starttime: '',
            endtime: '',
            users: [],
            props: props
        }
    }

    componentDidMount() {
        axios.get(`https://cpmqtt1.calit2.uci.edu/api.php?collection=userprofiles&_id=${this.state.props.match.params.id}`)
            .then(response => {
                this.setState({
                    username: response.data.result[0].username,
                    make: response.data.result[0].make,
                    model: response.data.result[0].model,
                    cost: response.data.result[0].cost,
                    society: response.data.result[0].society,
                    environment: response.data.result[0].environment,
                    zipcode: response.data.result[0].zip,
                    provider: response.data.result[0].electricalprovider,
                    starttime: response.data.result[0].starttime,
                    endtime: response.data.result[0].endtime
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('https://cpmqtt1.calit2.uci.edu/api.php?collection=usernames')
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
        console.log(this.state.users)
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

    onChangeZipcode(e) {
        this.setState({
            zipcode: e.target.value
        })
    }
    onChangeProvider(e) {
        this.setState({
            provider: e.target.value
        })
    }
    onChangeStarttime(date) {
        this.setState({
            starttime: date
        })
    }

    onChangeEndtime(date) {
        this.setState({
            endtime: date
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
            zip: this.state.zipcode,
            provider: this.state.provider,
            starttime: this.state.starttime,
            endtime: this.state.endtime

        }

        // console.log(profile);
        const where = {
            "username": this.state.username, // default value
        }
        const newProfile = JSON.stringify(profile);
        const newWhere = JSON.stringify(where);
        axios.post(`https://cpmqtt1.calit2.uci.edu/update.php`, `collection=userprofiles&param=${newWhere}&data=${newProfile}`, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
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
                                <input type="text"
                                    disabled="disabled"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                />
                            </div>

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
                                    <label>Zipcode: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.zipcode}
                                        onChange={this.onChangeZipcode}
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
                                <label>Start Date: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.starttime}
                                    onChange={this.onChangeStarttime}
                                />
                            </div>
                            <div className="form-group">
                                <label>End Date: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.endtime}
                                    onChange={this.onChangeEndtime}
                                />
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