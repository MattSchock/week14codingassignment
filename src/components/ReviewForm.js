import React from 'react';


export default class ReviewButton extends React.Component {
    render() {
        return (
            <div>
                <input className="form-control" type="text" placeholder="Review">Test</input>
                <button className="btn btn-primary">Submit</button>
            </div>
        )
    }
}