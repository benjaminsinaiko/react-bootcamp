import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Todo from './Todo';

function TodoList({
  todos, removeTodo, toggleTodo, editTodo,
}) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            lastTodo={i === todos.length - 1}
          />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
