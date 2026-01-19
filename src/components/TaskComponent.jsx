import Container from "@mui/material/Container";
import {AllTasksProvider} from "../context/Alltasks";
import {useAllTasks} from "../context/Alltasks";
import {useEffect, useState} from "react";
import {uuidv7} from "uuidv7";



import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import _default from "@emotion/styled";
import SimpleDialog from "./EditPopUp";
import SimpleDialogDemo from "./EditPopUp";
import FormDialog from "./EditPopUp";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import DeletePopUp from "./EditPopUp";
import FormDialogD from "./FormDialogDelete";
// function handleDelete(index) {   const {tasks, setTasks} = useAllTasks();
// const newTasks = tasks.filter((_, i) => i !== index);   setTasks(newTasks); }

export default function DoneTaskComponent() {
   const theme=createTheme({
          palette:{
              primary:{
                  main:"rgba(61, 115, 230, 0.87)"
              }
          }
      });
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
  const { tasks, handleDoneButton,open,handleDeleteButton,wantEdit} = useAllTasks();
 const TasksReadyToShow=tasks.filter(task=>!task.isDone)
  useEffect(() => {
    console.log('Tasks wantEdit:', wantEdit);
  }, [tasks,wantEdit]);


 console.log('open',open)
  return (
    <>
    <ThemeProvider theme={theme}>
      
      {TasksReadyToShow.map((task) =>{
        
       
console.log(" wantEdit " ,task.wantEdit)
            return(
        <Container
          key={task.id}
          id={task.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            gap: '5px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            marginBottom: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor:'primary impotant!'
          }}
        >
         <h2
            style={{
            overflowWrap: 'anywhere',
            maxWidth: '80%'
          }}>{task.title}</h2>
          <div
            style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection:'row'
          }}>
            <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
            <CheckCircleOutlineOutlinedIcon
              style={iconStyle}
              onClick={() => handleDoneButton(task.id)}
              />
            
            <FormDialogD task={task}/>
            

            <FormDialog task={task}></FormDialog>
              
              </div>
          </div>
            
        </Container>
        
      )})}
      </ThemeProvider>
      
    </>
  );
}