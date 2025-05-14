import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://event-manager-backend-3p95.onrender.com/api/todos', // adjust if needed
});

export default axiosInstance;