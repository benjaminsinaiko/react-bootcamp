import React, { Component } from 'react'

class Todo extends Component {
  handleDelete = () => {
    this.props.deleteTodo(this.props.id)
  }
  render() {
    return (
      <div>
        <li>{this.props.todoItem}</li>
        <button>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default Todo
