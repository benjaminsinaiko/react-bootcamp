import React, { Component } from 'react'

export default class FormsIntro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }
  handleChange = e => {
    this.setState({ username: e.target.value })
  }
  handleSubmit = e => {
    alert(`You typed "${this.state.username}"`)
    this.setState({ username: '' })
  }

  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.usernme}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    )
  }
}
