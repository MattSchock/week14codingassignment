import React from 'react';


export default class ReviewButton extends React.Component {
    render() {
        return (
            <div>
                <input className="form-control" type="text" placeholder="Review" id="reviewFormId">Test</input>
                <button className="btn btn-primary" onClick="this.">Submit</button>
            </div>
        )
    }
}