// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo_controller');

router.get('/getAllTodos', todoController.getAllTodos);
router.post('/addTodo', todoController.addTodo);
router.put('/updateTodo/:id', todoController.updateTodo);
router.delete('/deleteTodo/:id', todoController.deleteTodo);

module.exports = router;