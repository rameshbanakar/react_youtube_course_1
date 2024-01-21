import React, { Component } from 'react'

export default class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
    };
  }
  eventHandler() {
    this.setState({
      message: "good bye",
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.eventHandler.bind(this)}>Click me</button>
      </div>
    );
  }
}
