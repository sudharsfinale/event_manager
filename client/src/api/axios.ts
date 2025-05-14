import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/todos', // adjust if needed
});

export default axiosInstance;