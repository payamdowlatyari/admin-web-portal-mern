import React, { Component } from 'react';
import axios from 'axios';

const Preference = props => (

    <tr>
        <td>{props.preference.optimization}</td>
        <td>{props.preference.percentage}</td>
    </tr>
)

export default class PreferenceList extends Component {
    constructor(props) {
        super(props);

        this.deletePreference = this.deletePreference.bind(this)

        this.state = { preferences: [] };
    }

    componentDidMount() {
        axios.get('/api/preferences/')
            .then(response => {
                this.setState({ preferences: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePreference(id) {
        axios.delete('/api/preferences/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            preferences: this.state.preferences.filter(el => el._id !== id)
        })
    }

    PreferenceList() {
        return this.state.preferences.map(currentpreference => {
            return <Preference preference={currentpreference} key={currentpreference._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Preference Data</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Preference</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.PreferenceList()}


                    </tbody>
                </table>
            </div>
        )
    }
}