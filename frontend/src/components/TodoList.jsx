import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <div className='card-body'>
        <ul>
          <TodoItem />
        </ul>
    </div>
  )
}

export default TodoList