import React, {useState} from 'react'


const Actions = () => {
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
       if(e.code === 'Enter'){
            e.preventDefault()
            console.log(todo)
            setTodo('')
       }
    }

    return (
        <>
            <div className="todoForm">
                <form action="" onSubmit={handleSubmit} >
                    <i className="fa fa-list-ul"></i>
                    <input 
                        type="text" 
                        placeholder="Write new task here..." 
                        value={todo} 
                        onChange={(e)=>setTodo(e.target.value)} 
                        onKeyDown={handleSubmit}
                    />
                </form>
            </div>
            <div className="todoActions">
                <button>Clear all tasks</button>
                <button>Clear completed tasks</button>
            </div>
        </>
    )
}

export default Actions