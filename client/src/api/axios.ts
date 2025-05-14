import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.DOMAIN || "https://event-manager-backend-3p95.onrender.com/api/todos",
});

export default axiosInstance;