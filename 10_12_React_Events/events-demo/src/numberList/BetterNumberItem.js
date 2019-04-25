import React, { Component } from 'react'

export default class BetterNumberItem extends Component {
  handleRemove = () => {
    this.props.remove(this.props.value)
  }

  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    )
  }
}
