import TodoItem from "./TodoItem";
import {useSelector} from 'react-redux'

const selectTodos = state => state.todos

const TodoList = () => {
    const todos = useSelector(selectTodos)

    const todosToRender = todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo}/>
    })

    return (
        <ul>
            {todosToRender}
        </ul>
    )
}

export default TodoList