import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { isEditing: false, todo: this.props.todoItem }
  }
  handleDelete = () => {
    this.props.deleteTodo(this.props.id)
  }
  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }
  handleUpdate = e => {
    e.preventDefault()
    this.props.updateTodo(this.props.id, this.state.todo)
    this.toggleForm()
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleToggle = e => {
    this.props.toggleTodo(this.props.id)
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.todo}
              name="todo"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
          <li
            className={this.props.completed ? 'completed' : ''}
            onClick={this.handleToggle}>
            {this.props.todoItem}
          </li>
        </div>
      )
    }
    return result
  }
}

export default Todo
