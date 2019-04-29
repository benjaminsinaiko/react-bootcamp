import React, { Component } from 'react'
import uuid from 'uuid/v4'
import './NewTodoForm.css'

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
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="todo">NewTodo</label>
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
    )
  }
}

export default NewTodoForm
