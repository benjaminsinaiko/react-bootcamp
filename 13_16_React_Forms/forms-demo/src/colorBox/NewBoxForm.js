import React, { Component } from 'react'
import uuid from 'uuid/v4'

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '',
      height: '',
      color: ''
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const newBox = { ...this.state, id: uuid() }
    this.props.createBox(newBox)
    this.setState({
      width: '',
      height: '',
      color: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            type="text"
            id="height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            type="text"
            id="width"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color: </label>
          <input
            type="text"
            id="color"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <button>Add new box</button>
      </form>
    )
  }
}
