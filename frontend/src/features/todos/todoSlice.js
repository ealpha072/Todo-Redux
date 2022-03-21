const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
]


const generateId = (listOfTodos) => Math.max(...listOfTodos.map(todo => todo.id) + 1)

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'todos/addedNewTodo':{
            return [
                ...state,
                {
                    id:generateId(state),
                    text:action.payload,
                    completed: false
                }
            ]
        }
        case 'todos/completedChanged':{
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
        case 'todos/allCompleted':{
            return state.map(todo => {
                return {...todo, completed:true}
            })
        }
        case 'todos/clearCompleted':{
            return state.filter(todo => !todo.completed)
        }
        case 'todos/deleted':{
            return state.filter(todo => todo.id !== action.payload)
        }
        default:
            return state
    }
}

export default todoReducer
