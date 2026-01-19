import { createContext, useContext, useState,useReducer } from 'react';
import { uuidv7} from 'uuidv7';
import FormDialog from '../components/EditPopUp';
import { tasksReducer, initialState } from "../Reducers/myReducer.js";

const AllTasksContext = createContext();
export function AllTasksProvider({ children }) {


    const [state, dispatcher] = useReducer(tasksReducer, initialState);
    
    const handleAddButton = (value) => {
    if (value !== "") {
        const newTasks = [
            ...state.tasks,
            {
                id: uuidv7(),
                title: value,
                isDone: false,
                wantedit: false
            }
        ];

        dispatcher({ type: "SET_TASKS", payload: newTasks });
        dispatcher({ type: "SHOW_SNACK", payload: "Task Added successfully" });
        setTimeout(() => {
            dispatcher({ type: "HIDE_SNACK" });
        }, 1500);
    }
};
    const handleDeleteButton = (id) => {
    dispatcher({ type: "DELETE_TASK", payload: id });
    dispatcher({ type: "SHOW_SNACK", payload: "Task Deleted successfully" }); // here we just def a function to give the dispatcher a parameters
    setTimeout(() => dispatcher({ type: "HIDE_SNACK" }), 1500);
};
    const handleDoneButton=(id)=>{
       dispatcher({ type: "DONE_TASK", payload: id });
    dispatcher({ type: "SHOW_SNACK", payload: "Task done successfully" }); // here we just def a function to give the dispatcher a parameters
    setTimeout(() => dispatcher({ type: "HIDE_SNACK" }), 1500);
    }

    const handleRestorButton=(id)=>{
             dispatcher({ type: "DONE_TASK", payload: id });
    dispatcher({ type: "SHOW_SNACK", payload: "Task restored as undone successfully" }); // here we just def a function to give the dispatcher a parameters
    setTimeout(() => dispatcher({ type: "HIDE_SNACK" }), 1500);
    }
    const handleEditButton=(id,newTask)=>{
             dispatcher({ type: "EDIT_TASK", payload:{id:id,title:newTask} });
    dispatcher({ type: "SHOW_SNACK", payload: "Task Edited successfully" }); // here we just def a function to give the dispatcher a parameters
    setTimeout(() => dispatcher({ type: "HIDE_SNACK" }), 1500);
    }
    const setTasks = (tasks) => {
        dispatcher({ type: "SET_TASKS", payload: tasks });
    };

    // const setWantEdit = (value) => {
    //     dispatcher({ type: "SET_WANT_EDIT", payload: value });
    // };

    const showSnack = (message) => {
        dispatcher({ type: "SHOW_SNACK", payload: message });
    };

    const hideSnack = () => {
        dispatcher({ type: "HIDE_SNACK" });
    };
    localStorage.setItem('tasks1',JSON.stringify(state.tasks))
    return (
        <AllTasksContext.Provider
            value={{
                tasks: state.tasks,
                wantedit: state.wantedit,
                sankData: state.sankData,
                setTasks,
                // setWantEdit,
                showSnack,
                hideSnack,
                handleAddButton,
                handleDeleteButton,
                dispatcher,
                handleDoneButton,
                handleRestorButton,
                handleEditButton
            }}
        >
            {children}
        </AllTasksContext.Provider>
    );
}

export const useAllTasks = () => {
    return useContext(AllTasksContext);
};
