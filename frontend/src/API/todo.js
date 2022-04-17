import axios from "axios";
const baseUrl = 'http://localhost:5000/todos'

export const getAll = () => {
    const request = axios.get(baseUrl)
    return request
}

export const createTodo = (object) => {
    const request = axios.post(`${baseUrl}/create`, object)
    return request
}