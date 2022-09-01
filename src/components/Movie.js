import React from 'react';
import ReviewButton from '../components/ReviewForm';
import StarsButton from '../components/Stars';




export default class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "",
            stars : 0,             //single placeholder for star rating
            starsArray : [],      //Array here if I want to average stars in the future
            ReviewList : ['Review1', 'Review2', 'Review3'],      //hard coded array for strings of reviews
            id : 0
        }
    }

    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">{this.state.name}</div>
                <div className="card-body">Star Rating = {this.state.stars}</div>
                <div className="card-body">Reviews = {/*{this.props.ReviewList.forEach(() =>
                    React.createElement('div', {}, ReviewList[i])
                )}*/}
                
                </div>  
                <div className="card-footer"><StarsButton /> </div>
            </div>
        )
    }
}