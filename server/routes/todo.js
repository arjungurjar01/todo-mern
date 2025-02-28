import express from "express";
import { createTodo, deleteTodo, getAllTodos, updateTodo} from "../controllers/todo.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route('/create').post(isAuthenticated,createTodo).get(getAllTodos);
router.route('/create/:todoId').put(isAuthenticated,updateTodo).delete(isAuthenticated,deleteTodo);



export default router ; 