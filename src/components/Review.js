import React from 'react';


export default class Review extends React.Component {
    render() {
        return(
            <div className="card-body">
                
                <h2>{this.props.content} </h2>
            </div>
        )
    }
}

