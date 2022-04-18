import React, {useEffect} from 'react'
import Header from './components/Header'
import Actions from './components/Actions'
import TodoList from './components/TodoList'
import { getAll } from './API/todo'
import { useDispatch } from 'react-redux'
import { getAllTodos } from './redux/actions/todoActions'


const App = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        getAll().then(data => dispatch(getAllTodos(data)))
    }, [dispatch])

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div className="app-container">
                    <Actions />
                    <div className="todoList">
                        <TodoList />
                    </div>
                </div>
            </main>
        </>
  )
}

export default App