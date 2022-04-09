import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getTodos from './axios'


//components import 
import Navbar from './components/Navbar'
import Form from './components/Form'
import TodoList from './components/TodoList'
//dispatches
import { getAllTodos } from './redux/actions/todoActions'

const App = () => {
    const dispatch  = useDispatch()
    const fetchTodos = async () => {
        const response = await getTodos().catch(err => console.log(err))
        dispatch(getAllTodos(response.data.slice(0,10)))
    }

    useEffect(()=>{
        fetchTodos()
     })

    return (
        <>
            <Navbar />
            <div className="row justify-content-center" id='mainsection'>
                <div className="col-10 col-md-8 col-lg-6 border mt-2" style={{height:'500px', padding:'0', overflowY:'auto'}}>
                    <div className="sticky-top m-0" id='todosection'>
                        <Form />
                    </div>
                    <section className='m-2'>
                        <TodoList />
                    </section>
                    
                </div>
            </div>
        </>
    )
}

export default App

