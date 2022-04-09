import { ActionTypes } from "./actions";

export const getAllTodos = (todos) => {
    return{
        type:ActionTypes.GET_ALL_TODOS,
        payload:todos
    }
}