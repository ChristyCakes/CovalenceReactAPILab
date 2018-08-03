import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Cards extends Component {
    constructor(props) {
        super(props)
        console.log('state in Cards line 8', this.props.data)

        // next step: need to loop through films array, set keys, extract specific data
        this.state = {
            title: "",
            description: "",
            direction: "",
            producer: ""
        }
    }

    render() {
        // create cards here
        return (
            <div className="card">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Cards;