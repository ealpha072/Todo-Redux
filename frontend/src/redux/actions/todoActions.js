import { ActionTypes } from "./actions";

export const addNew = newTodo => {
    return{
        type:ActionTypes.ADD_NEW_TODO,
        payload:newTodo
    }
}

export const clearAll = () => {
    return{
        type:ActionTypes.CLEAR_ALL_TODOS
    }
}

export const toggleImportance = (id) => {
    return{
        type:ActionTypes.TOGGLE_IMPORTANCE,
        payload:id
    }
}

export const clearCompleted = () => {
    return{
        type:ActionTypes.CLEAR_COMPLETED
    }
}

export const deleteSingle = (id) => {
    return{
        type:ActionTypes.DELETE_TODO,
        payload:id
    }
}


