import React, { useState } from "react";
import { useDispatch } from "react-redux";


const Header = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleInputChange = (e) => setText(e.target.value)

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            console.log('Enter pressed');
            dispatch({type: 'todos/addedNewTodo', payload:text})
            setText('')
        }

    }

    return(
        <header>
            <input 
                type='text'
                value={text}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder='Enter new item'
            />
        </header>
    )
}

export default Header