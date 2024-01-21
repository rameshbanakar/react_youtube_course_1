import React, { Component } from 'react'

export default class EventHandlingClass extends Component {
  eventHandling(){
    console.log("hello from EventHandlingClass");
  }
  render() {
    return (
      <div>
        <button onClick={this.eventHandling}>click me</button>
      </div>
    );
  }
}
