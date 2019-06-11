import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Todo from './Todo';

function TodoList(props) {
  const { todos } = props;

  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <Todo key={todo.id} task={todo.task} completed={todo.completed} />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
