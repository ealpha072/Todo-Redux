import React from 'react'
import { availableColors, capitalize } from '../filters/colors'
import { StatusFilters } from '../filters/filterSlice'


const RemainingTodos = ({count}) => {
    const suffix = count === 1 ? ' ' : 's' 

    return(
        <div>
            <h4>Remaining Todos</h4>
            <p><strong>{count} </strong> item{suffix} Remaining </p>
        </div>
    )
}

const StatusFilter = () => {
    const FiltersToRender = Object.keys(StatusFilters).map(key => {
        const value = StatusFilters[key]
        return(
            <li key={value}>
                <button>{key}</button>
            </li>
        )
    })
    return(
        <ul>
            {FiltersToRender}
        </ul>
    )
}

const ColorFilter = () => {
    const colorsToRender = availableColors.map(color => {

        return (
            <label key={color}>
                <input 
                    type='checkbox'
                />
                <span
                    style = {
                        {
                            backgroundColor: color
                        }
                    }
                >
                </span>
                {capitalize(color)}
            </label>
        )
    })
    return (
        <div>
            <h6>Filter by color</h6>
            <form>{colorsToRender}</form>
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
            <RemainingTodos count={4}/>
            <StatusFilter />
            <ColorFilter />
        </footer>
    )
}

export default Footer