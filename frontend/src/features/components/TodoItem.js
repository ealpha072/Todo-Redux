import { availableColors, capitalize } from "../filters/colors"
import { useDispatch } from "react-redux"

const renderColors = availableColors.map(color => <option key={color}>{capitalize(color)}</option>)


const TodoItem = ({todo}) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch({type:'todos/deleted', payload:todo.id})
    }

    const handleCompletedChange = () => {
        dispatch({type:'todos/completedChanged', payload:todo.id})
    }

    return (
        <div style={{marginTop:'5px'}}>
            <li key={todo.id}>
                <input 
                    type={'checkbox'}
                    checked={todo.completed}
                    onChange={handleCompletedChange}
                />
                {todo.text}
                <select>
                    <option>--Color code--</option>
                    {renderColors}
                </select>
                <button onClick={handleDelete}>
                    Delete
                </button>
            </li>
        </div>
    )
}

export default TodoItem