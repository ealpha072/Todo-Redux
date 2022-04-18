import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addNew, clearAll, clearCompleted } from '../redux/actions/todoActions'

import { createTodo, deleteAll, deleteCompleted } from '../API/todo'

const Actions = () => {
    const dispatch = useDispatch()

    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
       if(e.code === 'Enter'){
            e.preventDefault()
            const newTodo = {
                title:todo,
                completed:false
            }
            createTodo(newTodo).then(data => dispatch(addNew(data)))
            setTodo('')
       }
    }

    const handleClearAll = (e) => {
        e.preventDefault()
        if(window.confirm('Clear all todos ? This will clear all your data')){
            deleteAll().then(data => dispatch(clearAll()))
        }
    }

    const clearCompletedTasks = (e) => {
        e.preventDefault()
        deleteCompleted().then(data => dispatch(clearCompleted()))
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