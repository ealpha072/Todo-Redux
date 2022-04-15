import React from 'react'
import Header from './components/Header'
import Actions from './components/Actions'
import TodoList from './components/TodoList'

const App = () => {
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