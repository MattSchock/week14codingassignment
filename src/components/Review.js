import React from 'react';

// container element for each review.
export default class Review extends React.Component {
    render() {
        return(
            <div className="card-body">
                
                <div>{this.props.review}</div>
            </div>
        )
    }
}

