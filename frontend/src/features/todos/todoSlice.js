const initialState = [
    {id:1, text: "Learn react-reduct", completed:true},
    {id:2, text: "Finish react project", completed:true},
    {id:3, text: "Deploy  Heroku app with php to live sight", completed:true, color:'red'},
    {id:4, text: "Build mern stack projects and deploy", completed:true, color:'blue'},
]

function nextId(todos){
    return Math.max(...todos.map(item => item.id)) + 1
}

/*
{type: 'todos/todoAdded', payload: todoText}
{type: 'todos/todoToggled', payload: todoId}
{type: 'todos/colorSelected, payload: {todoId, color}}
{type: 'todos/todoDeleted', payload: todoId}
{type: 'todos/allCompleted'}
{type: 'todos/completedCleared'}
{type: 'filters/statusFilterChanged', payload: filterValue}
{type: 'filters/colorFilterChanged', payload: {color, changeType}} */

export default function todoReducer(state = initialState, action){
    switch(action.type){
        case 'todos/addTodo':{
            return[
                ...state,
                {
                    id: nextId(state),
                    text: action.payload,
                    completed: false
                }
            ]
        }
        case 'todos/completedToggled':{
            return state.map(todo => {
                if(todo.id !== action.payload){
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        }
        
        case 'todos/colorSelected': {
            const {todoId, color} = action.payload
            return state.map(todo => {
                if(todo.id !== todoId){
                    return todo
                }
                return{
                    ...todo,
                    color
                }
            })
        }
        case 'todos/todoDeleted': {
            return state.filter(todo => todo.id !== action.payload)
        }

        case 'todos/allCompleted':{
            return state.map(todo => {
                return {...todo, completed: true}
            })
        }
        case 'todos/completedCleared': {
            return state.filter(todo => todo.completed === false )
        }
        default :

        return state
    }
}