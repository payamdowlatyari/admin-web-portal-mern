import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = props => (
  <tr>
    <td>{props.profile.username}</td>
    <td>{props.profile.make}</td>
    <td>{props.profile.model}</td>
    <td>{props.profile.cost}</td>
    <td>{props.profile.society}</td>
    <td>{props.profile.environment}</td>
    <td>{props.profile.zip}</td>
    <td>{props.profile.electricalprovider}</td>
    <td>{props.profile.starttime.substring(0, 10)}</td>
    <td>{props.profile.endtime.substring(0, 10)}</td>
    <td>
      <Link to={"/EditProfile/" + props.profile._id}>edit</Link> | <Link href="#" onClick={() => { props.deleteProfile(props.profile._id) }}>delete</Link>
    </td>
  </tr>
)

export default class ProfilesList extends Component {
  constructor(props) {
    super(props);

    // this.deleteProfile = this.deleteProfile.bind(this)

    this.state = { profiles: [] };
  }

  // state = {
  //   profiles: []
  // }

  // componentDidMount() {
  //   axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=userprofiles")
  //     .then(res => {
  //       this.setState({ data: res.data.result });
  //     })

  componentDidMount() {
    axios.get("https://cpmqtt1.calit2.uci.edu/api.php?collection=userprofiles")
      .then(res => {
        console.log(res.data)
        this.setState({ profiles: res.data.result })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProfile(id) {
    axios.post("https://cpmqtt1.calit2.uci.edu/delete.php", "collection=userprofiles&_id=" + id)
      .then(response => { console.log(response.data) });

    this.setState({
      profiles: this.state.profiles.filter(el => el._id !== id)
    })
  }

  profileList() {
    return this.state.profiles.map(currentprofile => {
      return <Profile profile={currentprofile} deleteProfile={this.deleteProfile} key={currentprofile.username} />;
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
              <th>zip</th>
              <th>Provider</th>
              <th>Start</th>
              <th>End</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody lassName="thead-light">
            {this.profileList()}
          </tbody>
        </table>
      </div>
    )
  }
}