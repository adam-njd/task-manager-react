export const initialState = {

    tasks: JSON.parse(localStorage.getItem('tasks1') )||[],
    wantedit: false,
    sankData: {
        show: false,
        message: ""
    }
};

export function tasksReducer(state, action) {
    switch (action.type) {

        case "RESTORE_TASK":
            return{
                ...state,
                 tasks: state.tasks.map(t => t.id === action.payload ? { ...t, isDone: !t.isDone } : t)
                
            };
        case "DONE_TASK":
            return{
                ...state,
                 tasks: state.tasks.map(t => t.id === action.payload ? { ...t, isDone: !t.isDone } : t)
                
            };
        case "DELETE_TASK":
            return{
                ...state,
                tasks:state.tasks.filter((t)=>t.id!==action.payload)
            };
        case "EDIT_TASK":
            return{
                ...state,
                tasks:state.tasks.map(t => t.id === action.payload.id ? { ...t, title:action.payload.title } : t)
            };
        case "SET_TASKS":
            return {
                ...state,
                tasks: action.payload
            };

        case "SET_WANT_EDIT":
            return {
                ...state,
                wantedit: action.payload
            };

        case "SHOW_SNACK":
            return {
                ...state,
                sankData: {
                    show: true,
                    message: action.payload
                }
            };

        case "HIDE_SNACK":
            return {
                ...state,
                sankData: {
                    show: false,
                    message: ""
                }
            };

        default:
            return state;
    }
}
