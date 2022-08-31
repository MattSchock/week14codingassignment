import React from 'react';




export default class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "",
            stars : '0',
            ReviewList : []
        }
    }

    render() {
        return(
            <div>
             <h2>{this.props.name}</h2>
            </div>
        )
    }


}