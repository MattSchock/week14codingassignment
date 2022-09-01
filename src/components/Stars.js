import React from 'react';


export default class StarsButton extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary" id="1stars" onClick={this.props.starsArray.push(1)}></button>
                <button className="btn btn-primary" id="2stars" onClick={this.props.starsArray.push(2)}></button>
                <button className="btn btn-primary" id="3stars" onClick={this.props.starsArray.push(3)}></button>
                <button className="btn btn-primary" id="4stars" onClick={this.props.starsArray.push(4)}></button>
                <button className="btn btn-primary" id="5stars" onClick={this.props.starsArray.push(5)}></button>
            </div>
        )
    }
}