// Already existing
import axios from '../api/axios';

export const fetchTasks = async () => {
  const response = await axios.get('/getAllTodos');
  return response.data;
};


export const addTask = async (todo:any) => {
  const response = await axios.post('/addTodo', todo);
  return response.data;
};


export const deleteTask = async (id:any) => {
    debugger;
  const response = await axios.delete(`/deleteTodo/${id}`);
  return response.data;
};


export const updateTask = async ({id, todo} : any) => {
    debugger;
  const response = await axios.put(`/updateTodo/${id}`, todo);
  return response.data;
};