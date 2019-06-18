import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Todo from './Todo';
import { TodosContext } from './contexts/todos.context';

function TodoList() {
  const { todos } = useContext(TodosContext);
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <Todo {...todo} key={todo.id} lastTodo={i === todos.length - 1} />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
