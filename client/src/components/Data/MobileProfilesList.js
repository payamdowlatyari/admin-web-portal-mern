import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ProfilesList extends Component {
  constructor(props) {
    super(props);

    this.state = { profiles: [] };
  }

  componentDidMount() {
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=userprofiles")
      .then(res => {
        this.setState({ profiles: res.data.result })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProfile(id) {
    axios.post("https://cpmqtt1.calit2.uci.edu/delete.php", "collection=userprofiles&_id=" + id.$oid)
      .then(response => { console.log(response.data) });
    this.setState({
      profiles: this.state.profiles.filter(el => el._id !== id)
    })
  }

  render() {
    return (
      <div>
        <h3>User Profiles</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>User</th>
              <th>Make</th>
              <th>Model</th>
              <th>Cost</th>
              <th>Soc.</th>
              <th>Env.</th>
              <th>Zipcode</th>
              <th>Provider</th>
              <th>Start</th>
              <th>End</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="thead-light">
            {this.state.profiles.map(currentprofile => { return (
              <tr key={currentprofile.username}>
                <td>{currentprofile.username}</td>
                <td>{currentprofile.make}</td>
                <td>{currentprofile.model}</td>
                <td>{currentprofile.cost}</td>
                <td>{currentprofile.society}</td>
                <td>{currentprofile.environment}</td>
                <td>{currentprofile.zip}</td>
                <td>{currentprofile.electricalprovider}</td>
                <td>{currentprofile.starttime}</td>
                <td>{currentprofile.endtime}</td>
                <td>
                  <Link to={"/EditMobileProfile/" + currentprofile._id.$oid}>edit</Link> | <a href="#" onClick={() => { this.deleteProfile(currentprofile._id) }}>delete</a>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    )
  }
}