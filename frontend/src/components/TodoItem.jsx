import React from 'react'
import { useSelector } from 'react-redux'

const TodoItem = () => {
  const todos = useSelector(state => state.todos.todos)

  const renderTodos = todos.map(todo => {
    return(
      <li className="list-group-item mb-2 border" key={todo.id}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="text-secondary">{todo.title}</h5>
          <div className="d-flex">
            <button className="btn btn-sm btn-success me-2">Edit</button>       
            <button className="btn btn-sm btn-danger">Del</button>               
          </div>
        </div>
      </li>
    )
  })

  return (
    <>
      {renderTodos}
    </>
  )
}

export default TodoItem