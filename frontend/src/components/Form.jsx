import React from 'react'

const Form = () => {
  return (
    <form action="" className='d-flex p-2' >
      <div className="flex-grow-1"><input type="text" className='form-control form-control-sm' /></div>
      <div className='ms-2'><button className='btn btn-sm btn-outline-primary rounded-pill'>+ Add Todo</button></div>
    </form>
  )
}

export default Form
