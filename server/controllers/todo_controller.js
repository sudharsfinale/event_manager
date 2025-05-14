// controllers/todoController.js
const todoService = require('../services/todo_service');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Error getting todos', error: err.message });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const saved = await todoService.addTodo(req?.body?.text, req?.body?.status);
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Error adding todo', error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
 try {
     const { text, status } = req.body;
    
     const updated_todo = {text, status}

     const updatedTodo = await todoService.updateTodo(req.params.id, updated_todo)
 
     if (!updatedTodo) {
       return res.status(404).json({ message: 'Todo not found' });
     }
 
     res.json({ message: 'Todo updated successfully', todo: updatedTodo });
   } catch (error) {
     res.status(500).json({ message: 'Server error', error: error.message });
   }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await todoService.deleteTodo(req.params.id);

    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted successfully', todo: deletedTodo });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting todo', error: err.message });
  }
};