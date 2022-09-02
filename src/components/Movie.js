import React from 'react';
import ReviewButton from '../components/ReviewForm';
import StarsButton from '../components/Stars';
import Review from './Review';




export default class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : props.name,
            stars : 0,             
            starsArray: [props.starsArray],      //Place holder to change to average stars in the future.
            reviewsList: [],
            // reviews: props.reviews,        
            id : props.id                 //im pretty sure this doesnt do anything right now.
        }
        this.handleClick = this.handleClick.bind(this);
        this.secondHandleClick = this.secondHandleClick.bind(this);
        this.thirdHandleClick = this.thirdHandleClick.bind(this);
        this.fourthHandleClick = this.fourthHandleClick.bind(this);
        this.fifthHandleClick = this.fifthHandleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleClick() {
        this.setState({stars : 1})
    }

    secondHandleClick() {
        this.setState({stars: 2})
    }

    thirdHandleClick() {
        this.setState({stars: 3})
    }

    fourthHandleClick() {
        this.setState({stars: 4})
    }

    fifthHandleClick() {
        this.setState({stars: 5})
    }


    handleSubmit(event) {
        this.state.reviewsList.push(this.state.value)
        console.log('submitreviewstest',this.state.reviewsList);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
       let reviews = [];
       
        for (let i = 0; i < this.state.reviewsList.length; i++) {
            reviews.push(<Review key={i} review={this.state.reviewsList[i]} />);
        }
        {console.log('id', this.state)};
        
        return (
        <div>
            {" "}
            <div className="card w-75">
                <div className="card-header bg-success text-white">{this.state.name}</div>
                <div className="card-body">Star Rating = {this.state.stars}</div>
                <div className="card-body">Reviews = {this.state.reviews}
                
                </div>  
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={this.handleClick}>One Star</button>
                    <button className="btn btn-primary" onClick={this.secondHandleClick}>Two Stars</button>
                    <button className="btn btn-primary" onClick={this.thirdHandleClick}>Three Stars</button>
                    <button className="btn btn-primary" onClick={this.fourthHandleClick}>Four Stars</button>
                    <button className="btn btn-primary" onClick={this.fifthHandleClick}>Five Stars</button>
                </div>
                <div className="card-footer">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Review:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            </div>
        )
    }
}