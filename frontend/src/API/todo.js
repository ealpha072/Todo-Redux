import axios from "axios";
const baseUrl = 'http://localhost:5000/todos'

export const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

export const createTodo = async (object) => {
    const request = await axios.post(`${baseUrl}/create`, object)
    return request.data
}