import Todo from '../models/todo.js'

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch (error) {
        res.status(404).json({message:error.message})
    }   
}


export const createTodo = async (req, res) =>{
    const todoDetails = req.body
    const newTodo = new Todo(todoDetails)

    try {
        await newTodo.save()
        res.status(200).json(newTodo)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const toggleImportance = async (req, res) => {
    const body = req.body
    const newState = {
        title:body.title,
        completed: !body.completed
    }

    try {
        await Todo.findByIdAndUpdate(req.params.id, newState, {new:true})
        res.status(200).json(newState)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const deleteTodo = async (req, res) => {
    try{
        await Todo.findByIdAndRemove(req.params.id, req.body)
        res.status(200).json({message:'Successfully deleted todo'})
    } catch (error){
        res.status(404).json({message:error.message})
    }
}

export const clearCompleted = async (req, res) => {
    try{
        await Todo.deleteMany({completed:true})
        res.status(200).json({message:'Successfully deleted completed tasks'})
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

export const clearAll = async (req, res) => {
    try{
        await Todo.deleteMany()
        res.status(200).json({message:'Successfully deleted all tasks'})
    }catch (error){
        res.status(404).json({message:error.message})
    }
}