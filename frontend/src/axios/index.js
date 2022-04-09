import axios from "axios";

const getTodos = () => {
    const request = axios.get('https://jsonplaceholder.typicode.com/todos')
    return request
}

export default getTodos