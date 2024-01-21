import React, { Component } from 'react'

export default class StateClassComp extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome visitor",
    };
  }
  chnageState(){
    this.setState({message:"thanks for subscribe"})
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.chnageState()}>subscribe</button>
      </div>
    );
  }
}
