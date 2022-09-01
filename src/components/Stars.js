import React from 'react';


export default class StarsButton extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary" id="1stars" onClick={() => this.setState(state => ({stars: 1}))}>One Star</button>
                <button className="btn btn-primary" id="2stars" onClick={() => this.setState(state => ({stars: 2}))}>Two Star</button>
                <button className="btn btn-primary" id="3stars" onClick={() => this.setState(state => ({stars: 3}))}>Three Star</button>
                <button className="btn btn-primary" id="4stars" onClick={() => this.setState(state => ({stars: 4}))}>Four Star</button>
                <button className="btn btn-primary" id="5stars" onClick={() => this.setState(state => ({stars: 5}))}>Five Star</button>
            </div>
        )
    }
}