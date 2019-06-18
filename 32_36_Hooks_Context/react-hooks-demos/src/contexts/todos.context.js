// todos
// all methods to interact w/todos
import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'Mow the lawn using goats', completed: false },
  { id: 2, task: 'Release lady bugs into garder', completed: true },
];

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const todosStuff = useTodoState(defaultTodos);
  const { children } = props;
  return <TodosContext.Provider value={todosStuff}>{children}</TodosContext.Provider>;
};
