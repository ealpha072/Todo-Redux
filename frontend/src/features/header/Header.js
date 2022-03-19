import {React, useState} from 'react'

const Header = () => {
    const [text, setText] = useState('')

    const handleChange = (e) => setText(e.target.value)

    return (
        <header>
            <input 
                placeholder='New todo'
                value={text}
                onChange={handleChange}
            />
        </header>
    )
}

export default Header