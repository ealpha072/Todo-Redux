import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleImportance, deleteSingle } from '../redux/actions/todoActions'


const TodoItem = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)

  const renderTodos = todos.map(todo => {
    return (
      <li key={todo.id}>
          <div className="todo">
              <input 
                type="checkbox" 
                checked={todo.completed ? 'checked' : ''} 
                onChange={()=>dispatch(toggleImportance(todo.id))} 
              />

              <label htmlFor="">{todo.title}</label>
          </div>
          <div className="actions">
              <i className="fa fa-pencil-square-o"></i>
              <i className="fa fa-trash-o" onClick={()=>dispatch(deleteSingle(todo.id))}></i>
          </div>
      </li>
    )
  })

  return (
    <ul>
      {renderTodos}
    </ul>
  )

}

export default TodoItem