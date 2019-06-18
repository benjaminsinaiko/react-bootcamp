import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';

import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT_TODO', id, newTask: value });
    reset();
    toggleEditForm();
  };

  return (
    <form onSubmit={handleEdit} style={{ marginLeft: '1rem', width: '50%' }}>
      <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
    </form>
  );
}

export default EditTodoForm;
