import axios from "axios";

const BASE_URL = "http://localhost:3000";

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(async config => {
    // Declaramos um token manualmente para teste.
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODk1YjY4MjQwNzA4N2ZmMjUyY2RjZCIsImNwZiI6IjE4NTIyNDc4NTY2IiwiaWF0IjoxNzM3MDU2OTA4LCJleHAiOjE3MzcxNDMzMDh9.faJip_J7IVA1Z4qozv2Tq6RFKksqZ8AHgMIDPLbrm2A";
  
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
  
    return config;
  });

export default api;
