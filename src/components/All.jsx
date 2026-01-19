import Container from "@mui/material/Container";
import {AllTasksProvider} from "../context/Alltasks";
import {useAllTasks} from "../context/Alltasks";
import {useEffect, useState} from "react";
import {uuidv7} from "uuidv7";
import FormDialog from "./EditPopUp";
import Box from "@mui/material/Box";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import _default from "@emotion/styled";
import FormDialogD from "./FormDialogDelete";
// function handleDelete(index) {   const {tasks, setTasks} = useAllTasks();
// const newTasks = tasks.filter((_, i) => i !== index);   setTasks(newTasks); }

export default function All() {
  const {tasks, handleDoneButton, handleDeleteButton} = useAllTasks();

  useEffect(() => {
    console.log('Tasks updated:', tasks);
  }, [tasks]);

  console.log("the filterd arr", tasks)
  return ( <> {
    tasks.map((task) => {
      let checkStyle=(task.isDone===true?'primery':'white')
      return (
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
          // backgroundColor:'mediumvioletred'
        }}>
          <h2
            style={{
            overflowWrap: 'anywhere',
            maxWidth: '80%'
          }}>{task.title}</h2>
          <Box
            style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection:'row'
          }}>
            
            <CheckCircleOutlineOutlinedIcon
              style={{
                // backgroundColor:"green",
              cursor: 'pointer',
              width: '43px',
              height: '43px',
              borderRadius: '100%',

              }}

              onClick={() => handleDoneButton(task.id)}/>
            <FormDialogD task={task}/>
            <FormDialog task={task}/>
          </Box>
        </Container>
      )
    })
  } </>
  );
}