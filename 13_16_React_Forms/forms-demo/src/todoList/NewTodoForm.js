import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { todoItem: '' }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const newTodo = { id: uuid(), ...this.state, completed: false }
    this.props.addTodo(newTodo)
    this.setState({ todoItem: '' })
  }

  render() {
    return (
      <div>
        <label htmlFor="todo">Add new Todo</label>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="todo"
            name="todoItem"
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
