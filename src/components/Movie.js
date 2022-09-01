import React from 'react';
import ReviewButton from '../components/ReviewForm';




export default class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "",
            stars : 0,
            ReviewList : ['Review1', 'Review2', 'Review3'],
            id : 0
        }
    }

    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">{this.props.name}</div>
                <div className="card-body">Star Rating = {this.props.stars}</div>
                <div className="card-body">Reviews = {/*{this.props.ReviewList.forEach(() =>
                    React.createElement('div', {}, ReviewList[i])
                )}*/}
                
                </div>  
                <div className="card-footer">{ReviewButton}</div>
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