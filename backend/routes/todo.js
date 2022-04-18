import mongoose from "mongoose";
import express from "express";
const router = express.Router()

import { getAllTodos, createTodo, deleteTodo, toggleImportance } from "../controllers/todo.js";

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */

router.get('/', getAllTodos)


/**
 * @route PUT api/todo/::id
 * @description update todo with given id
 * @access public
 */
router.put('/update/:id', toggleImportance);

/**
 * @route POST api/todo
 * @description add todo
 * @access public
 */
router.post('/create', createTodo);

/**
 * @route DELETE api/todo/::id
 * @description get all todo
 * @access public
 */

router.delete('/:id', deleteTodo)


export default router