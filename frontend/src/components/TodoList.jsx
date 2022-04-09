import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <div className='mt-2'>
        <h4 className="text-secondary">My Todo List</h4>
        <div className="list-group" id='todoitems'>
          <TodoItem />
        </div>
    </div>
  )
}

export default TodoList