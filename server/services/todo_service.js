// services/todoService.js
const Todo = require('../models/Todo');

exports.getAllTodos = async () => {
  return await Todo.find();
};

exports.addTodo = async (text, status) => {
  const newTodo = new Todo({ text, status });
  return await newTodo.save();
};

exports.updateTodo = async (id, data) => {
  return await Todo.findOneAndUpdate({ id }, data, { new: true });
};

exports.deleteTodo = async (id) => {
  return await Todo.findOneAndDelete({ id });
};
