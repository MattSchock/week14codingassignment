import React from 'react';

import Review from './Review';



// movie object. 
export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        // state for each movie
        this.state = {
            // name of movie
            name: props.name,
            // static star rating
            stars: 0,
            // array to hold review styrings
            reviewsList: [],
            // reviews: props.reviews,        
            id: props.id                 //im pretty sure this doesnt do anything right now.
        }
        // binding for all buttons
        this.handleClick = this.handleClick.bind(this);
        this.secondHandleClick = this.secondHandleClick.bind(this);
        this.thirdHandleClick = this.thirdHandleClick.bind(this);
        this.fourthHandleClick = this.fourthHandleClick.bind(this);
        this.fifthHandleClick = this.fifthHandleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // button for 1 star reviews
    handleClick() {
        this.setState({ stars: 1 })
    }
    // button for two star reviews
    secondHandleClick() {
        this.setState({ stars: 2 })
    }
    // button for 3 star reviews
    thirdHandleClick() {
        this.setState({ stars: 3 })
    }
    // button for 4 star reviews
    fourthHandleClick() {
        this.setState({ stars: 4 })
    }
    // button for 5 star reviews.
    fifthHandleClick() {
        this.setState({ stars: 5 })
    }

    // button to handle review submit button
    handleSubmit(event) {
        // prevents page reload
        event.preventDefault();
        // pushes string to reviews array
        this.state.reviewsList.push(this.state.value)
        // testing logs
        console.log('submitreviewstest', this.state.reviewsList);
        // sets state so it actually updates DOM when you click submit
        this.setState({});
        // event.preventDefault();
    }
    // handles change to text box
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        // array to hold review objects
        let reviews = [];
        // iterates through reviews held in state and pushes them to above reviews array as objects.
        for (let i = 0; i < this.state.reviewsList.length; i++) {
            reviews.push(<Review key={i} review={this.state.reviewsList[i]} />);
        }
        { console.log('id', this.state) };

        return (
            <div>
                <div>
                    {/* old code. leaving in here for reference. */}
                    {/* <div>
                        {" "}
        //this is the div that holds the movie and the reviews.
                        <h1>{this.state.name}</h1> //this is the movie name.
                        <h2>{this.state.stars}</h2>
                        <h3>{this.state.starsArray}</h3>
                        <h4>{this.state.reviewsList}</h4> //this is the reviews.
                        <h5>{this.state.id}</h5> //this is the id.
                        <button onClick={this.handleClick}>1</button>
                    </div> */}
                    {/* below is header of each movie card including the movie name */}
                    <div className="card-header bg-success text-white">{this.state.name}</div>
                    {/* below is div to hold stars in state and display */}
                    <div className="card-body">Star Rating = {this.state.stars}</div>
                    {/* div to hold reviews in state */}
                    <div>{this.state.reviewsList}</div>
                    <div className="card-body">{this.state.reviews}
                        {/* divs to hold ID of each movie */}
                        <div className="card-body">id = {this.state.id}</div>

                    </div>
                    {/* below is footer to hold all 5 star movie buttons */}
                    <div className="card-footer">
                        <button className="btn btn-primary" onClick={this.handleClick}>One Star</button>
                        <button className="btn btn-primary" onClick={this.secondHandleClick}>Two Stars</button>
                        <button className="btn btn-primary" onClick={this.thirdHandleClick}>Three Stars</button>
                        <button className="btn btn-primary" onClick={this.fourthHandleClick}>Four Stars</button>
                        <button className="btn btn-primary" onClick={this.fifthHandleClick}>Five Stars</button>
                    </div>
                    <div className="card-footer">
                        {/* form to type in reviews */}
                        <form onSubmit={this.handleSubmit}>
                            {/* label for reviews */}
                            <label>
                                Review:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            {/* submit button for reviews */}
                            <input className="btn btn-primary" type="submit" value="Submit" onClick={this.handleSubmit} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}