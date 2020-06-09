import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Admin = props => (
    <tr>
        <td>{props.admin.name}</td>
        <td>{props.admin.email}</td>
        <td>{props.admin.date}</td>
        <td>
            <Link to={"/EditAdmin/" + props.admin._id}>edit</Link> | <Link href="#" onClick={() => { props.deleteAdmin(props.admin._id) }}>delete</Link>
        </td>
    </tr>
)

export default class AdminsList extends Component {
    constructor(props) {
        super(props);

        this.deleteAdmin = this.deleteAdmin.bind(this)

        this.state = { admins: [] };
    }

    componentDidMount() {
        axios.get('/api/users/')
            .then(response => {
                this.setState({ admins: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteAdmin(id) {
        axios.delete('/api/users/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            admins: this.state.admins.filter(el => el._id !== id)
        })
    }

    adminList() {
        return this.state.admins.map(currentadmin => {
            return <Admin admin={currentadmin} deleteAdmin={this.deleteAdmin} key={currentadmin._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Admin Profiles</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="thead-light">
                        {this.adminList()}
                    </tbody>
                </table>
            </div>
        )
    }
}