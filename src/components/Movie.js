import React from 'react';
import ReviewButton from '../components/ReviewForm';




export default class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "",
            stars : 0,
            ReviewList : [ ],
            id : 0
        }
    }

    render() {
        return(
            React.createElement('div', {className: 'card w-75'},
            React.createElement('div', {className: 'card-header bg-success text-white'}, `${this.props.name}`),
            React.createElement('div', {className: 'card-body'}, `Star Rating= ${this.props.stars}`),
            React.createElement('div', {className: 'card-body'}, `Reviews = `),
            React.createElement('div', {className: 'card-footer'}, ReviewButton),
            ) 
        )
    }
}