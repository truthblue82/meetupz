import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AppConstant } from '../AppConstant';

class MeetupDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: ''
        }
    }

    componentWillMount() {
        this.getMeetup();
    }

    getMeetup() {
        let meetupId = this.props.match.params.id;
        axios.get(`${AppConstant.serverUrl}/api/meetups/${meetupId}`)
            .then(response => {
                this.setState({detail: response.data}, () => {
                    console.log(this.state);
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <h1>{this.state.detail.name}</h1>
                <ul className="collection">
                    <li className="collection-item">City: {this.state.detail.city}</li>
                    <li className="collection-item">Address: {this.state.detail.address}</li>
                </ul>
                <Link className="btn" to={`/meetups/edit/${this.state.detail.id}`}>Edit</Link>
                <button className="btn red right">Delete</button>
            </div>
        )
    }
}

export default MeetupDetail;