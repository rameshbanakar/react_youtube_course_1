import React, { Component } from 'react'

export default class PropsClassComp extends Component {
  render() {
    // const {name}=this.props
    return (
      <div>
        <h2>hello {this.props.name} from PropsClassComp</h2>
      </div>
    )
  }
}
