import React from 'react';


export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: this.props.parentName,
            childName: this.props.childName
        };
    }

    render() {
        return(
            <div>
                <h1>passed from {this.state.parentName}</h1>
                <h2>{this.state.childName}</h2>
            </div>
        )
    }
}

