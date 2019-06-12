import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

function Todo({
  id, task, completed, removeTodo, toggleTodo, editTodo,
}) {
  const [isEditing, toggle] = useToggleState(false);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  return (
    <>
      <ListItem>
        {isEditing ? (
          <EditTodoForm id={id} task={task} editTodo={editTodo} toggleEditForm={toggle} />
        ) : (
          <>
            <Checkbox tabIndex={-1} onClick={handleToggle} checked={completed} />
            <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={handleRemove}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggle}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
      <Divider />
    </>
  );
}

export default Todo;
