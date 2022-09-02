import React from 'react';


export default class Review extends React.Component {
    render() {
        return(
            <div className="card-body">
                
                <h2>{this.props.review} </h2>
            </div>
        )
    }
}

