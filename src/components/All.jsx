import Container from "@mui/material/Container";
import {AllTasksProvider} from "../context/Alltasks";
import {UseAllTasks} from "../context/Alltasks";
import {useEffect, useState} from "react";
import {uuidv7} from "uuidv7";



import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import _default from "@emotion/styled";
// function handleDelete(index) {   const {tasks, setTasks} = UseAllTasks();
// const newTasks = tasks.filter((_, i) => i !== index);   setTasks(newTasks); }


export default function All() {
  const { tasks, handleDoneButton,handleDeleteButton } = UseAllTasks();
 
  useEffect(() => {
    console.log('Tasks updated:', tasks);
  }, [tasks]);


 console.log("the filterd arr" ,tasks)
  return (
    <>
      {tasks.map((task) =>{

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
          }}
        >
          <h2 style={{overflowWrap: 'anywhere', maxWidth:'80%'}}>{task.title}</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <CheckCircleOutlineOutlinedIcon
              style={{ cursor: 'pointer' }}
              onClick={() => handleDoneButton(task.id)}
            />
            <DeleteOutlineOutlinedIcon onClick={()=>handleDeleteButton(task.id)} style={{ color: 'red', cursor: 'pointer' }} />
            <EditOutlinedIcon style={{ cursor: 'pointer' }} />
          </div>
        </Container>
      )})}
    </>
  );
}