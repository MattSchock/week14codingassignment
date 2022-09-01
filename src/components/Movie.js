import React from 'react';
import ReviewButton from '../components/ReviewForm';
import StarsButton from '../components/Stars';




export default class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "",
            stars : 0,
            starsArray : [],
            ReviewList : ['Review1', 'Review2', 'Review3'],
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





    // render() {
    //     return(
    //         React.createElement('div', {className: 'card w-75'},
    //         React.createElement('div', {className: 'card-header bg-success text-white'}, `${this.props.name}`),
    //         React.createElement('div', {className: 'card-body'}, `Star Rating= ${this.props.stars}`),
    //         React.createElement('div', {className: 'card-body'}, `Reviews = `),
    //         React.createElement('div', {className: 'card-footer'}, ReviewButton),
    //         ) 
    //     )
    // }
}