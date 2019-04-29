import React, { Component } from 'react'

export default class Box extends Component {
  handleRemove = () => {
    this.props.removeBox(this.props.id)
  }
  render() {
    return (
      <div>
        <div
          style={{
            width: `${this.props.width}em`,
            height: `${this.props.height}em`,
            backgroundColor: this.props.color
          }}
        />
        <button onClick={this.handleRemove}>X</button>
      </div>
    )
  }
}
