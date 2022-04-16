import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addNew, clearAll, clearCompleted } from '../redux/actions/todoActions'

const Actions = () => {
    const dispatch = useDispatch()

    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
       if(e.code === 'Enter'){
            e.preventDefault()
            const newTodo = {
                id:Math.ceil(Math.random()*100),
                title:todo,
                completed:false
            }

            console.log(newTodo)
            dispatch(addNew(newTodo))
            setTodo('')
       }
    }

    const handleClearAll = (e) => {
        e.preventDefault()
        if(window.confirm('Clear all todos')){
            dispatch(clearAll())
        }
    }

    const clearCompletedTasks = (e) => {
        e.preventDefault()
        dispatch(clearCompleted())
    }

    return (
        <>
            <div className="todoForm">
                <form action="" onSubmit={handleSubmit} >
                    <i className="fa fa-list-ul"></i>
                    <input 
                        type = "text" 
                        placeholder = "Write new task here..." 
                        value = {todo} 
                        onChange={(e)=>setTodo(e.target.value)} 
                        onKeyDown={handleSubmit}
                    />
                </form>
            </div>
            <div className="todoActions">
                <button onClick={handleClearAll}>Clear all tasks</button>
                <button onClick={clearCompletedTasks}>Clear completed tasks</button>
            </div>
        </>
    )
}

export default Actions