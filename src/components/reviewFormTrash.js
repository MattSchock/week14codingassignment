import React from 'react';


export default class ReviewButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {ReviewList: []};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    } 
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      this.setState({ReviewList => })
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Review:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      );
    }
  }