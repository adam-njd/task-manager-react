import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { UseAllTasks } from '../context/Alltasks';

export default function FormDialog({ task }) {
  const { handleEditButton } = UseAllTasks();
  const [open, setOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState({ title: '' });
  const iconStyle = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
    opacity: 0.9,
  },
};
  React.useEffect(() => {
    if (task) setNewTask(task);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.title) return;
    handleEditButton(newTask.id, newTask.title);
    setOpen(false);
  };

  return (
    <>
      <EditOutlinedIcon
        onClick={() => setOpen(true)}
        style={iconStyle}
      />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            variant="standard"
            value={newTask.title}
            onChange={(e) =>
              setNewTask({ ...newTask, title: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Done</Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
