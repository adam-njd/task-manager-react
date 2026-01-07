// 
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { UseAllTasks } from '../context/Alltasks';

export default function FormDialog() {
  const { clicked, setIsClicked } = UseAllTasks();

  console.log("clicked in dialog is", clicked);

  const handleClose = () => {
    setIsClicked(false); // 👈 سكّر الـ Dialog من الـ Context
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson.title);
    handleClose();
  };

  return (
    <Dialog open={clicked} onClose={handleClose}>
      <DialogTitle>Edit Task</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Edit your task title
        </DialogContentText>

        <form onSubmit={handleSubmit} id="edit-form">
          <TextField
            autoFocus
            required
            margin="dense"
            name="title"
            label="Task title"
            fullWidth
            variant="standard"
          />
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="edit-form">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
