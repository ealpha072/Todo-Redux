import React from "react";
import { statusFilters } from "../filters/filterSlice";
import { availableColors, capitalize } from "../filters/colors";
import { useSelector, useDispatch } from "react-redux";

const FilterByStatusOptions = ({value:status, onChange}) => {
    const filterOptionsToRender = Object.keys(statusFilters).map(key => {
        const value = statusFilters[key]
        const handleClick = () => onChange(value)

        return(
            <li key={value}>
                <button onClick={handleClick}>
                    {key}
                </button>
            </li>
        )
    })
    return (
        <div>
            <h3>Filter by Status </h3>
            <ul>{filterOptionsToRender}</ul>
        </div>
        
    )
}

const ColorFilters = () => {
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
        <div>
            <h3>Filter by Color</h3>
            <ul>{renderColorOptions}</ul>
        </div>
    )
}


const Footer = () => {
    const dispatch = useDispatch()
    const numbeOfUncompletedTodos = useSelector(state => {
        const unCompletedTodos = state.todos.filter(todo => !todo.completed)
        return unCompletedTodos.length
    })
    const {status, colors} = useSelector(state => state.filters)

    const markAllComplete = () => {
        dispatch({type:'todos/allCompleted'})
    }

    const clearCompleted = () => {
        dispatch({type:'todos/clearCompleted'})
    }

    const onFilterByStatusChange = (status) => {
        dispatch({type:'filters/statusFilterChanged', payload:status})
    }

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
                <FilterByStatusOptions value={status} onChange={onFilterByStatusChange} />
                <ColorFilters />
            </div>
        </footer>
    )
}

export default Footer