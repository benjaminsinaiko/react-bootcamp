import React, { Component } from 'react'
import Box from './Box'
import './BoxesContainer.css'

export default class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 20,
    allColors: [
      'purple',
      'magenta',
      'pink',
      'mediumPurple',
      'thistle',
      'plum',
      'orchid'
    ]
  }
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ))
    return <div className="BoxesContainer">{boxes}</div>
  }
}
