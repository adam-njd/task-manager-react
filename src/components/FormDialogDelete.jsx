import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { UseAllTasks } from '../context/Alltasks';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
export default function FormDialogD({ task }) {
  const { handleDeleteButton } = UseAllTasks();
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
  const [open, setOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState(null);

  React.useEffect(() => {
    if (task) {
      setNewTask(task);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleDeleteButton(task.id);
    setOpen(false);
  };

  if (!newTask) return null; 

  return (
    <>
      <div onClick={() => setOpen(true)}>
     
      

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Task</DialogTitle>

        <DialogContent style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <WarningAmberIcon style={{color:'red', textAlign:'center' , fontSize:'xxx-large'}}></WarningAmberIcon>
         <p> 
          Are you sure Delete this task!</p>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleSubmit}>Delete</Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
         <DeleteOutlineOutlinedIcon
              
              onClick={() => setOpen(true)}
              style={iconStyle}/>
      </div>
    </>
  );
}
