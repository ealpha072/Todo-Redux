import React from 'react'

const TodoItem = () => {
  return (
    <li>
        <div className="todo">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">This is an input</label>
        </div>
        <div className="actions">
            <i className="fa fa-pencil-square-o"></i>
            <i className="fa fa-trash-o"></i>
        </div>
    </li>
  )
}

export default TodoItem