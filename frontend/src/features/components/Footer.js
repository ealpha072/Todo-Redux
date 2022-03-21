import React from "react";
import { allowedFilters } from "../filters/filterSlice";
import { availableColors, capitalize } from "../filters/colors";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
    const dispatch = useDispatch()
    const numbeOfUncompletedTodos = useSelector(state => {
        const unCompletedTodos = state.todos.filter(todo => !todo.completed)
        return unCompletedTodos.length
    })

    const markAllComplete = () => {
        dispatch({type:'todos/allCompleted'})
    }

    const clearCompleted = () => {
        dispatch({type:'todos/clearCompleted'})
    }

    const renderFilters = Object.keys(allowedFilters).map(key => {
        return <li key={key}><button>{allowedFilters[key]}</button></li>
    })

    const renderColorOptions = availableColors.map(color => {
        return(
            <li key={color} style={{listStyleType:'none'}}>
                <input 
                    type={'checkbox'}
                />
                {capitalize(color)}
            </li>
        )
    })

    return (
        <footer>
            <div>
                <h3>Remaining Todos</h3>
                <h4>{numbeOfUncompletedTodos}: items left</h4>
            </div>
        
            <div>
                <h3>Actions</h3>
                
                    <button onClick={markAllComplete}>
                        Mark All Completed
                    </button>
                
                    <button onClick={clearCompleted}>
                        Clear completed
                    </button>             
            </div>

            <div style={{display:'inline-flex'}}>
                <h3>Filter by options</h3>
                <div>
                    <ul>
                        {renderFilters}
                    </ul>
                </div>
                <div>
                    <ul>
                        {renderColorOptions}
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer