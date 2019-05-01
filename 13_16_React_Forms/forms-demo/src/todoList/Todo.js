import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { isEditing: false, todo: this.props.todoItem }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleDelete = () => {
    this.props.deleteTodo(this.props.id)
  }
  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }
  handleToggle = e => {
    this.props.toggleTodo(this.props.id)
  }
  handleUpdate = e => {
    e.preventDefault()
    this.props.updateTodo(this.props.id, this.state.todo)
    this.toggleForm()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('TODO COMPONENT DID UPDATE')
    console.log(prevProps.todo)
    console.log(this.state.todo)
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
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
        <div className="Todo">
          <li
            className={
              this.props.completed ? 'Todo-task completed' : 'Todo-task'
            }
            onClick={this.handleToggle}>
            {this.props.todoItem}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.handleDelete}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      )
    }
    return result
  }
}

export default Todo
