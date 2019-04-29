import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  create = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  delete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        todoItem={todo.todoItem}
        deleteTodo={this.delete}
      />
    ))
    return (
      <div>
        <h1>Todo List!</h1>
        <h4>A Simple React Todo App</h4>
        <hr />
        <ul>{todos}</ul>
        <div>
          <NewTodoForm addTodo={this.create} />
        </div>
      </div>
    )
  }
}

export default TodoList
