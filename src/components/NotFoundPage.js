import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <h1>This page is not right</h1>
                <p>Do you wont to go to home page ? </p><Link to='/'>Home</Link>
            </div>
        )
    }
}
