import { ActionTypes } from "../actions/actions";

const intialState = {
    todos:[]
}

const todoReducer = (state = intialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.ADD_NEW_TODO:
            return {
                ...state, 
            }
        case ActionTypes.GET_ALL_TODOS:
            return{
                ...state,
                todos:payload
            }
        default:
            return state
    }
}

export default todoReducer