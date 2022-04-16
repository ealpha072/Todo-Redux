import { ActionTypes } from "../actions/actions";

const intialState = {
    todos:[{
        id:Math.ceil(Math.random()*1000),
        title:'Buy new shoes for the game',
        completed:false,
    },{
        id:Math.ceil(Math.random()*1000),
        title:'Buy groceries',
        completed:true
    },{
        id:Math.ceil(Math.random()*1000),
        title:'Buy more items from the shop',
        completed:false
    },{
        id:Math.ceil(Math.random()*1000),
        title:'Visit parents',
        completed:true
    },{
        id:Math.ceil(Math.random()*1000),
        title:'Do alot of things together',
        completed:true
    }]
}


const todoReducer = (state = intialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.ADD_NEW_TODO:
            return {
                ...state,
                todos:[...state.todos.concat(payload)]
            }
        case ActionTypes.CLEAR_ALL_TODOS:
            return{
                ...state,
                todos:[]
            }
        case ActionTypes.TOGGLE_IMPORTANCE:
            return{
                ...state,
                todos:[...state.todos.map(todo => 
                        todo.id === payload ? {...todo, completed:!todo.completed} : todo
                )]
            }
        case ActionTypes.CLEAR_COMPLETED:
            return{
                ...state,
                todos:[...state.todos.filter(todo => todo.completed === false )]
            }
        case ActionTypes.DELETE_TODO:
            return{
                ...state,
                todos:[...state.todos.filter(todo => todo.id !== payload)]
            }
            
        default:
            return state
    }
}

export default todoReducer