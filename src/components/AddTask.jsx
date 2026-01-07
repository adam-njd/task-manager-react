import {useState} from "react";
import { UseAllTasks } from "../context/Alltasks";
  import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function AddTask({tapID}) {
  const [newTask,setNewTask] = useState("")
  const {handleAddButton} = UseAllTasks();


  return (
    <div style={tapID===0?{
      display: "flex",
      justifyContent: "center"
    }:{display:'none'}}>

          <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          style={{Color:'white' , borderRadius:'10px'}}
          value={newTask}
          onChange={(e) => {
        setNewTask(e.target.value);
    
    }}
        />
    
      </div>
    </Box>
      <button onClick={() => {
        //  if (!newTask.trim()) return;
          handleAddButton(newTask);
          setNewTask("");
      }}>"Add"</button>
    </div>
  )

}



////////


