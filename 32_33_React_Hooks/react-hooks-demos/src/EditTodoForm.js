import React from 'react';
import TextField from '@material-ui/core/TextField';

import useInputState from './hooks/useInputState';

function EditTodoForm({
  id, task, editTodo, toggleEditForm,
}) {
  const [value, handleChange, reset] = useInputState(task);

  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  };

  return (
    <form onSubmit={handleEdit}>
      <TextField margin="normal" value={value} onChange={handleChange} fullWidth />
    </form>
  );
}

export default EditTodoForm;
