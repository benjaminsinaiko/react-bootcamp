import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  create = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  delete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  update = (id, updatedTodo) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, todoItem: updatedTodo }
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }
  toggleCompletion = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        todoItem={todo.todoItem}
        completed={todo.completed}
        deleteTodo={this.delete}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}
      />
    ))
    return (
      <div className="TodoList">
        <h1>
          Todo List! <span>A Simple React Todo List App</span>
        </h1>
        <ul>{todos}</ul>
        <div>
          <NewTodoForm addTodo={this.create} />
        </div>
      </div>
    )
  }
}

export default TodoList
