import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { todoItem: '', isCompleted: false }
  }
  handleChange = e => {
    this.setState({ todoItem: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const newTodo = { id: uuid(), ...this.state }
    this.props.addTodo(newTodo)
    this.setState({ todoItem: '' })
  }

  render() {
    return (
      <div>
        <p>Add new Todo</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            placeholder="New Todo"
            value={this.state.todoItem}
            onChange={this.handleChange}
          />
          <button>ADD TODO</button>
        </form>
      </div>
    )
  }
}

export default NewTodoForm
