
import { useState } from "react";
import { UseAllTasks } from "../context/Alltasks";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AddTask({ tapID }) {
  const [newTask, setNewTask] = useState("");
  const { handleAddButton } = UseAllTasks();

  const handleAdd = () => {
    if (!newTask.trim()) return;
    handleAddButton(newTask);
    setNewTask("");
  };

  return (
    <div
      style={
        tapID === 0
          ? { display: "flex", justifyContent: "center" }
          : { display: "none" }
      }
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "stretch", 
          '& .MuiTextField-root': { flex: 1 }, 
          mt:"20px"
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Add Task"
          multiline
          maxRows={4}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={handleAdd}
          sx={{ height: "100%" }} 
          disabled={newTask.length==0}
        >
          Add
        </Button>
      </Box>
    </div>
  );
}

