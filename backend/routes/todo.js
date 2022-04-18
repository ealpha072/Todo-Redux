import express from "express";
const router = express.Router()

import { 
    getAllTodos, 
    createTodo, 
    deleteTodo, 
    toggleImportance, 
    clearAll, 
    clearCompleted } from "../controllers/todo.js";

router.get('/', getAllTodos)
router.put('/update/:id', toggleImportance);
router.post('/create', createTodo);

//delete routes
router.delete('/delete/:id', deleteTodo)
router.delete('/deleteAll', clearAll)
router.delete('/deleteCompleted', clearCompleted)

export default router