import axios from "axios";

const BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: BASE_URL,
});

// Adicionando o token ao header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
