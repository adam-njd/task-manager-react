import { createContext, useContext, useState } from 'react';
import { uuidv7 } from 'uuidv7';
import FormDialog from '../components/EditPopUp';

const AllTasksContext = createContext();

export function UseAllTasks() {
  const context = useContext(AllTasksContext);

  if (!context) {
    throw new Error("UseAllTasks must be used inside AllTasksProvider");
  }
  console.log('the context is ',context)
  return context;
}

 export function AllTasksProvider({ children }) {
const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')) || [];
const [clicked,setIsClicked]=useState(false);
 const [tasks ,setTasks]=useState(tasksFromStorage);
 localStorage.setItem('tasks',JSON.stringify(tasks));



 function handleAddButton(value){
    if(value!=="")
    setTasks(prev=>[...prev,{id:uuidv7(), title:value ,isDone:false}])
     console.log("task has been add")
 }
 function handleDoneButton(TaskId){
    setTasks(prev=>prev.map( t=> t.id===TaskId ? {...t, isDone: !t.isDone } : t))
   
 }
 function handleEditButton(TaskId){
setIsClicked(true);
     console.log("ckliicckkkddd",clicked);
     
    

   
 }
    function handleDeleteButton(TaskId){
        setTasks(prev=>prev.filter( t=> t.id !== TaskId));
      
    }
    
  
   return (
     <AllTasksContext.Provider value={{tasks, clicked,setTasks,handleAddButton,handleDoneButton,handleDeleteButton,handleEditButton }}>
       {children}
     </AllTasksContext.Provider>
   );
 }
