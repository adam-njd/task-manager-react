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
const [wantedit,setIsClicked]=useState(false);
 const [tasks ,setTasks]=useState(tasksFromStorage);
 localStorage.setItem('tasks',JSON.stringify(tasks));
   const [open, setOpen] = useState(false);



 function handleAddButton(value){
    if(value!=="")
    setTasks(prev=>[...prev,{id:uuidv7(), title:value ,isDone:false, wantedit:false}])
     console.log("task has been add");
 }
 function handleDoneButton(TaskId){
    setTasks(prev=>prev.map( t=> t.id===TaskId ? {...t, isDone: !t.isDone } : t))
   
 }
 function handleRestorButton(TaskId){
    setTasks(prev=>prev.map( t=> t.id===TaskId ? {...t, isDone: !t.isDone } : t))
   
 }
 function handleEditButton(TaskId,newTask){
     
 
     setTasks(prev=>prev.map( t=> t.id===TaskId ? {...t, title:newTask } : t))
    

   
 }
    function handleDeleteButton(TaskId){
         setOpen(true)
         
        setTasks(prev=>prev.filter( t=> t.id !== TaskId));
      
    }
    
  
   return (
     <AllTasksContext.Provider value={{tasks,open,wantedit,setTasks,handleAddButton,handleDoneButton,handleDeleteButton,handleEditButton ,handleRestorButton}}>
       {children}
     </AllTasksContext.Provider>
   );
 }
