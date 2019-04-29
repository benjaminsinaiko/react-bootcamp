import React, { Component } from 'react'

export default class MultipleForms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    alert(`You typed "${this.state.username}"`)
    this.setState({
      [e.target.name]: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Form w/Multiple Inputs</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="pasword"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    )
  }
}
